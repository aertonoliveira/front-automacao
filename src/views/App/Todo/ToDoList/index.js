import React from 'react';
import {index} from '../../../../config/pluginsInit';
import {Row, Col} from 'reactstrap';
import ProjectList from  '../ProjectList';
import TaskList from  '../TaskList';

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
            <Row>
                <Col lg={3}>
                    <ProjectList></ProjectList>
                </Col>
                <Col lg={9}>
                    <TaskList></TaskList>
                </Col>
            </Row>
        );
    }
}

export default Index;
