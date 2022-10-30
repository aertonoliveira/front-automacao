import React from 'react';
import { Link } from 'react-router-dom';
import { MenuListStyle1 } from '../../index';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideBarItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      sideBarItems: this.props.items,
    });
  }

  render() {
    const { sideBarItems } = this.state;
    const { logo, homeUrl } = this.props;
    return (
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <Link to={homeUrl}>
            <img src={logo} className="img-fluid" alt="" />
            <span>CooAap</span>
          </Link>
        </div>
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <MenuListStyle1
              items={sideBarItems}
              className={'iq-menu'}
              visible={true}
              id="iq-sidebar-toggle"
            />
          </nav>
        </div>
      </div>
    );
  }
}

export default Index;
