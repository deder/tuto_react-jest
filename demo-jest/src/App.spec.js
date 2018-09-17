import { expect } from 'chai'
import {shallow} from 'enzyme'
import React from 'react';
import App from './App';
import CardLarge from './card-large';
import CardSmall from './card-small';


describe('<App />', ()=>{

    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).to.contain(<CardLarge/>)
    });
    it('has 10 cards', () => {
        const wrapper = shallow(<App />);
        expect( wrapper.find('CardSmall') ).to.have.length(10); 
    });

})



