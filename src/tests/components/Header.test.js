import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(wrapper).toMatchSnapshot();
  //expect(wrapper.find('h1').lenght).toBe(1);Expensify
  //expect(wrapper.find('h1').text()).toBe('Expensify');
});
