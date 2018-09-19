import App from './App';

describe('<App />', ()=>{
    it("Snapshot", () => {
        const wrapper = shallow(
            <App />
        );
        expect(wrapper).to.matchSnapshot();
    });
    it('Contient 10 Composant CardSmall', () => {
        const wrapper = shallow(
            <App />
        );
        expect( wrapper.find('CardSmall') ).to.have.length(10); 
    });
    it('Contient 1 Composant CardLarge', () => {
        const wrapper = shallow(
            <App />
        );
        expect( wrapper.find('CardLarge') ).to.have.length(1); 
    });
})