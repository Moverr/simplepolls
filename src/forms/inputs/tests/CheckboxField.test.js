import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import CheckboxField from '../CheckboxField';
 

describe('Testing Input FIeld', () => {
  it('should  render correctly', () => {    
    const props = {
        className:"inputfield",
        value:"Label Title",
         name:"name" 
    }

      const wrapper = shallow(<CheckboxField props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 