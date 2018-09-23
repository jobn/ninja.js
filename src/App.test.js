import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

const rows = [
  {
    name: 'Mads L. Klausen',
    email: 'MadsLKlausen@jourrapide.com',
    editPath: 'http://google.com',
    perId: 1
  },
  {
    name: 'Alfred K. Krogh',
    email: 'AlfredKKrogh@armyspy.com',
    editPath: 'http://google.com',
    perId: 2
  },
  {
    name: 'Silas L. Bertelsen',
    email: 'SilasLBertelsen@armyspy.com',
    editPath: 'http://google.com',
    perId: 3
  },
  {
    name: 'Mia A. Johnsen',
    email: 'MiaAJohnsen@dayrep.com',
    editPath: 'http://google.com',
    perId: 4
  },
  {
    name: 'Alfred S. Schou',
    email: 'AlfredSSchou@jourrapide.com',
    editPath: 'http://google.com',
    perId: 5
  }
];

it('renders without crashing', () => {
  shallow(<App rows={[]} locale="da" rowsPerPage={5} />);
});

it('renders 5 rows', () => {
  const wrapper = mount(<App rows={rows} locale="da" rowsPerPage={5} />);

  expect(wrapper.find('tr').length).toBe(5);
});

it('filters rows based on input', () => {
  const wrapper = mount(<App rows={rows} locale="da" rowsPerPage={5} />);

  wrapper.find('input').simulate('change', { target: { value: 'k' } });

  expect(wrapper.find('tr').length).toBe(2);
});
