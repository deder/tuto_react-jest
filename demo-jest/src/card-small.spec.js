import CardSmall from './card-small';

describe("<CardSmall />",()=>{
    it("Snapshot", () => {
        const wrapper = shallow(
          <CardSmall />
        );
        expect(wrapper).to.matchSnapshot();
    });
    it("onClick", () => {
        const onClick = sinon.spy();
        const wrapper = shallow(
          <CardSmall onClick={onClick} />
        );
        wrapper.simulate('click');
        expect(onClick).to.have.been.called();
    });
})
