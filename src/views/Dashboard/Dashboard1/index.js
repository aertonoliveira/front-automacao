import React from 'react';
import {index} from "../../../config/pluginsInit";

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }

    render() {
        return (
            <>
                <h1>Dashboard 2</h1>
            </>
        );
    }
}

export default Index;
