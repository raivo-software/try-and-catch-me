import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { kilometersToMiles, milesToKilometers } from './conversions';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Miles to kms conversion is correct", () => {
  const expectedValue = 8.0467;
  const value = milesToKilometers(5);
  expect(value).toBeCloseTo(expectedValue);
});

test("Kms to miles conversion is correct", () => {
  const expectedValue = 3.10686;
  const value = kilometersToMiles(5);
  expect(value).toBeCloseTo(expectedValue);
});

test("Passing non-numeric values causes error", () => {
  expect(() => milesToKilometers("merkkijono")).toThrow();
  expect(() => kilometersToMiles("merkkijono")).toThrow();
});

test("Default conversion is miles to kilometers", () => {
  const wrapper = mount(<App />);
  const source = wrapper.find('#sourceTitle');
  expect(source.text()).toBe("Miles");
  const destination = wrapper.find('#destinationTitle');
  expect(destination.text()).toBe("Kilometers");
});

test("End to end test", () => {
  const sourceValue = 5020;
  const wrapper = mount(<App />);

  const inputField = wrapper.find('#inputfield');
  inputField.simulate('change', { target: {value: sourceValue.toString()}});
  
  const convertButton = wrapper.find('#convertButton');
  convertButton.simulate('click');

  const expectedKms = milesToKilometers(sourceValue);
  const resultField = wrapper.find('#result');
  const resultKms = parseFloat(resultField.text());
  expect(resultKms).toBeCloseTo(expectedKms);
  console.log('resultKms', expectedKms, resultKms);

  const switchButton = wrapper.find('#switch');
  switchButton.simulate('click');

  convertButton.simulate('click');

  const expectedMiles = kilometersToMiles(sourceValue);
  const resultMiles = parseFloat(resultField.text());
  expect(resultMiles).toBeCloseTo(expectedMiles);
  console.log('resultMiles', expectedMiles, resultMiles);
});