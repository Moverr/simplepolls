import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import TextAreaField from '../TextAreaField';
 

describe('Testing Input FIeld', () => {
  it('should  render correctly', () => {    
    const props = {
        className:"inputfield",
        value:"text example",
        name:"name" 
           }

      const wrapper = shallow(<TextAreaField props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 