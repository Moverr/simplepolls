import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import TextInputField from '../TextInputField';
 

describe('Testing Input FIeld', () => {
  it('should  render correctly', () => {    
    const props = {
        className:"inputfield",
        value:"text example",
        name:"name" 
        
           }

      const wrapper = shallow(<TextInputField props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 