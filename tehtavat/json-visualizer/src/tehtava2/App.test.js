import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { convertJSON } from '../tehtava1/convertJSON';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const validJson = `{
  "firstname": "Susa",
  "lastname": "Kokkola",
  "car": null,
  "age": 52
}`;

const invalidJson = '{ invalideProperty: invalidValue }';

/*
TEHTÄVÄ 2: Toteuta allaolevat testit tehtävänannon mukaisesti
VINKIT:
  - Voit kirjoittaa tekstikenttään arvoja käyttämällä "simulate('change', { target: { value: 'JOKIN ARVO'}})" -syntaksia
  - Voit painaa visualisointi-nappia käyttämällä "simulate('click')" -syntaksia
  - Voit hakea tekstikentän käyttämällä find('#jsoninput') -syntaksia
  - Voit hakea napin käyttämällä find('#visualizebutton') -syntaksia
  - Voit hakea kirjoitetun tuloksen käyttämällä find('#result') -syntaksia
*/ 

test('convertJSON returns object on valid JSON', () => {
  // TEHTÄVÄ 2A: Testaa että convertJSON palauttaa objectin, jossa kenttien arvot ovat oikeat. (käytä yllä määriteltyä validJsonia)
});

test('convertJSON returns null on invalid JSON', () => {
  // TEHTÄVÄ 2B: Testaa että convertJSON null -arvon, kun parametrina annettu json on epävalidi. (käytä yllä määriteltyä invalidJsonia)
});

test('App renders valid JSON', () => {
  // TEHTÄVÄ 2C: Testaa että sovellus kirjoittaa "#results" -elementtiin sille annettua JSON dataa. Riittää kun testaat vain osan datasta
});

test('App renders "INVALID JSON" on invalid JSON', () => {
  // TEHTÄVÄ 2D: Testaa että sovellus kirjoittaa "#results" -elementtiin "INVALID JSON", jos tekstikenttään on annettu epävalidia jsonia.
});