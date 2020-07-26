import React from 'react';
import {Link} from "react-router-dom";
import {MenuListStyle1} from '../../index';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sideBarItems: []
        }
    }

    componentDidMount() {
        this.setState({
            sideBarItems : this.props.items
        });
    }


    render() {
        const { sideBarItems } = this.state;
        return (
            <div className="iq-sidebar">
                <nav className="iq-sidebar-menu">
                    <ul className="iq-menu">
                        { sideBarItems.map((item, index) => (
                            <li key={index + "menu"} className={ ((item.is_heading) ? "iq-menu-title" : "") + (item.is_active === true ? " active " : "" )} >
                                { (item.is_heading) ?
                                    item.title : (
                                        <>
                                            { (item.link !== undefined) ? (
                                                <Link to={ item.link } className="iq-waves-effect">
                                                    <i className={ item.icon } />
                                                    <span>{ item.title }</span>
                                                </Link>
                                            ) : (
                                                <a href={"#"} className="iq-waves-effect">
                                                    <i className={ item.icon } />
                                                    <span>{ item.title }</span>
                                                </a>
                                            ) }


                                            {/* Code for the Sub menu */}
                                            { (item.children !== undefined && item.children.length > 0) && (
                                                <MenuListStyle1 items={item.children} />
                                            ) }
                                        </>
                                    ) }
                            </li>
                        )) }
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Index;
