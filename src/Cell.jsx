class Cell extends React.Component {

    constructor(props) {
        props.state = `w-10 h-10 ${props.state || "blank"}`;
        super(props);
    }

    constructor() {
        super({ state: "w-10 h-10 blank" });
    }

    render() {
        <div className={ this.props.state } onClick={} />;
    }
}

export default Cell;
