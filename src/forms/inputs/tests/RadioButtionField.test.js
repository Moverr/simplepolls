import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import RadioButtonField from '../RadioButtonField';

  function handleClick(){
    return false;
}


describe('Testing Button FIeld', () => {
  it('should  render correctly', () => {    
    const props = {
        title:"Option 1",
         name:"name" ,
        checked:true,
        className:"form-check-input"
        
    }

      const wrapper = shallow(<RadioButtonField props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 