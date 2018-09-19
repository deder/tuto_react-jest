import CardLarge from './card-large';

describe("<CardLarge />",()=>{
    it("Snapshot", () => {
        const wrapper = shallow(
          <CardLarge />
        );
        expect(wrapper).to.matchSnapshot();
    });
    it("onClick", () => {
        const onClick = sinon.spy();
        const wrapper = shallow(
          <CardLarge onClick={onClick} />
        );
        wrapper.simulate('click');
        expect(onClick).to.have.been.called();
    });
})
