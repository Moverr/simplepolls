import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import ButtonField from '../ButtonField';

 
 const clickAlert  = jest.fn();
  
let wrapper = null;
beforeAll(()=>{

const props = {
        title:"Button Title",
        name:'Button Name',
        message:'Button Message',
        className:'buttonField',
        id:"buttonID",
        callback:clickAlert()
    };
    wrapper = shallow(<ButtonField props />); 
  
});

describe('Testing Button FIeld', () => {
 
  it('should  render correctly', () => {     
    expect(wrapper).toMatchSnapshot(); 
     });


  it('button should respond to click event ', () => {     
      expect(clickAlert).toHaveBeenCalled();      
      wrapper.find('button').simulate('click');       
      expect(clickAlert).toHaveBeenCalledTimes(1);

      
     });



})



 