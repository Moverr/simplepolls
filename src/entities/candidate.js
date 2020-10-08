// To parse this data:
//
//   const Convert = require("./file");
//
//   const candidate = Convert.toCandidate(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
function toCandidate(json) {
    return cast(JSON.parse(json), r("Candidate"));
}

function candidateToJson(value) {
    return JSON.stringify(uncast(value, r("Candidate")), null, 2);
}

function invalidValue(typ, val, key = '') {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val, typ, getProps, key = '') {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val) {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}

function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}

function a(typ) {
    return { arrayItems: typ };
}

function u(...typs) {
    return { unionMembers: typs };
}

function o(props, additional) {
    return { props, additional };
}

function m(additional) {
    return { props: [], additional };
}

function r(name) {
    return { ref: name };
}

const typeMap = {
    "Candidate": o([
        { json: "data", js: "data", typ: a(r("Datum")) },
    ], false),
    "Datum": o([
        { json: "id", js: "id", typ: 0 },
        { json: "status", js: "status", typ: "" },
        { json: "owner", js: "owner", typ: r("ModifiedBy") },
        { json: "created_on", js: "created_on", typ: Date },
        { json: "modified_by", js: "modified_by", typ: r("ModifiedBy") },
        { json: "modified_on", js: "modified_on", typ: Date },
        { json: "party", js: "party", typ: r("Party") },
    ], false),
    "ModifiedBy": o([
        { json: "id", js: "id", typ: 0 },
        { json: "status", js: "status", typ: "" },
        { json: "role", js: "role", typ: 0 },
        { json: "first_name", js: "first_name", typ: "" },
        { json: "last_name", js: "last_name", typ: null },
        { json: "email", js: "email", typ: "" },
        { json: "token", js: "token", typ: "" },
        { json: "timezone", js: "timezone", typ: "" },
        { json: "locale", js: "locale", typ: null },
        { json: "locale_options", js: "locale_options", typ: null },
        { json: "avatar", js: "avatar", typ: 0 },
        { json: "company", js: "company", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "email_notifications", js: "email_notifications", typ: true },
        { json: "last_access_on", js: "last_access_on", typ: Date },
        { json: "last_page", js: "last_page", typ: "" },
        { json: "external_id", js: "external_id", typ: "" },
        { json: "theme", js: "theme", typ: "" },
        { json: "2fa_secret", js: "2fa_secret", typ: null },
        { json: "password_reset_token", js: "password_reset_token", typ: null },
    ], false),
    "Party": o([
        { json: "id", js: "id", typ: 0 },
        { json: "status", js: "status", typ: "" },
        { json: "owner", js: "owner", typ: 0 },
        { json: "created_on", js: "created_on", typ: Date },
        { json: "modified_by", js: "modified_by", typ: 0 },
        { json: "modified_on", js: "modified_on", typ: Date },
        { json: "name", js: "name", typ: "" },
        { json: "primarycolor", js: "primarycolor", typ: "" },
        { json: "secondarycolor", js: "secondarycolor", typ: "" },
        { json: "othercolor", js: "othercolor", typ: "" },
        { json: "symbol", js: "symbol", typ: 0 },
        { json: "slang", js: "slang", typ: "" },
        { json: "intro", js: "intro", typ: "" },
        { json: "biography", js: "biography", typ: "" },
        { json: "featured_image", js: "featured_image", typ: 0 },
        { json: "featured_video", js: "featured_video", typ: 0 },
    ], false),
};

module.exports = {
    "candidateToJson": candidateToJson,
    "toCandidate": toCandidate,
};
