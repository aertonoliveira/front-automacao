/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
// Import for the page assets...
import { index } from '../../config/pluginsInit';
import '../../assets/scss/style.scss';
import '../../assets/css/main-css.css';

// Import Custom components...
import {
  SideBarStyle,
  NavBarStyle1,
  FooterStyle1,
  Lottie,
} from '../../components/vito';
import data1Json from '../../assets/images/small/lottie-bell';
import data2Json from '../../assets/images/small/lottie-mail';
//Import Dashboard
import Home from './Home';

import { Switch, Route, Link } from 'react-router-dom';

// Import JSON Data...
import sideBarItems from './sidebar-menu';
/*import Loading from "react-loading-bar";*/

import { Collapse } from 'reactstrap';

import { logoutRequest } from '../../store/modules/auth/actions';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      items: [
        {
          text: 'Dashboard',
          href: '/dashboard1',
        },
        {
          text: 'Home',
          active: true,
        },
      ],
      footerItems: [
        {
          title: 'Privacy Policy',
          href: '/',
        },
        {
          title: 'Terms of Use',
          href: '/',
        },
      ],
      searchItem: [
        {
          name: 'Dashboard',
          href: '/',
          icon: 'ri-home-4-line pr-2',
        },
        {
          name: 'Dashboard-1',
          href: '/dashboard2',
          icon: 'ri-home-3-line pr-2',
        },
        {
          name: 'Profile',
          href: '/dashboard',
          icon: 'ri-profile-line pr-2',
        },
        {
          name: 'Todo',
          href: '/todo',
          icon: 'ri-chat-check-line pr-2',
        },
        {
          name: 'Email',
          href: '/email/index',
          icon: 'ri-mail-line pr-2',
        },
        {
          name: 'Faq',
          href: '/faq',
          icon: 'ri-compasses-line pr-2',
        },
      ],
      topNavBar: [
        {
          link: '/',
          icon: 'ri-home-4-line',
        },
        {
          link: '/todo',
          icon: 'ri-question-answer-line',
        },
        {
          link: '/email/index',
          icon: 'ri-inbox-line',
        },
        {
          link: '/',
          icon: 'ri-file-list-line',
        },
      ],

      footerTitle:
        'Copyright 2020 - Jin Investe - Todos os direitos reservados.',
      collapsed: false,
    };
  }

  componentDidMount() {
    index();
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleLogout = (event) => {
    event.preventDefault();

    this.props.logoutRequest(this.props.token);
  };

  render() {
    const { items, footerItems, footerTitle, collapsed } = this.state;

    return (
      <>
        <div className="wrapper">
          <SideBarStyle
            items={sideBarItems}
            logo={require('../../assets/images/logo.gif')}
            homeUrl={'/'}
          />

          <NavBarStyle1
            title={'Dashboard'}
            homeUrl={'/'}
            logo={require('../../assets/images/logo.gif')}
            breadCrumb={items}
          >
            <div className="navbar-left">
              <ul id="topbar-data-icon" className="d-flex p-0 topbar-menu-icon">
                {this.state.topNavBar.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      to={item.link}
                      className="nav-link font-weight-bold search-box-toggle"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="iq-search-bar">
                <form action="#" className="searchbox">
                  <input
                    type="text"
                    className="text search-input"
                    placeholder="Type here to search..."
                  />
                  <a className="search-link" href="#">
                    <i className="ri-search-line"></i>
                  </a>
                  <div className="searchbox-datalink">
                    <h6 className="pl-3 pt-3">Pages</h6>
                    <ul className="m-0 pl-3 pr-3 pb-3">
                      {this.state.searchItem.map((item, index) => (
                        <li className="iq-bg-primary-hover rounded" key={index}>
                          <Link
                            to={item.href}
                            className="nav-link router-link-exact-active router-link-active pr-2"
                          >
                            <i className={item.icon}></i>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </form>
              </div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.toggleNavbar}
            >
              <i className="ri-menu-3-line" />
            </button>
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu">
                <div className="main-circle">
                  <i className="ri-arrow-left-s-line"></i>
                </div>
                <div className="hover-circle">
                  <i className="ri-arrow-right-s-line"></i>
                </div>
              </div>
            </div>
            <Collapse isOpen={collapsed} navbar>
              <ul className="navbar-nav ml-auto navbar-list">
                <li className="nav-item">
                  <a
                    className="search-toggle iq-waves-effect language-title"
                    href="#"
                  >
                    <img
                      src={require('../../assets/images/small/flag-01.png')}
                      alt="img-flaf"
                      className="img-fluid mr-1 height-16"
                    />
                    English
                    <i className="ri-arrow-down-s-line"></i>
                  </a>
                  <div className="iq-sub-dropdown">
                    <a className="iq-sub-card" href="#">
                      <img
                        src={require('../../assets/images/small/flag-02.png')}
                        alt="img-flaf"
                        className="img-fluid mr-2"
                      />
                      French
                    </a>
                    <a className="iq-sub-card" href="#">
                      <img
                        src={require('../../assets/images/small/flag-03.png')}
                        alt="img-flaf"
                        className="img-fluid mr-2"
                      />
                      Spanish
                    </a>
                    <a className="iq-sub-card" href="#">
                      <img
                        src={require('../../assets/images/small/flag-04.png')}
                        alt="img-flaf"
                        className="img-fluid mr-2"
                      />
                      Italian
                    </a>
                    <a className="iq-sub-card" href="#">
                      <img
                        src={require('../../assets/images/small/flag-05.png')}
                        alt="img-flaf"
                        className="img-fluid mr-2"
                      />
                      German
                    </a>
                    <a className="iq-sub-card" href="#">
                      <img
                        src={require('../../assets/images/small/flag-06.png')}
                        alt="img-flaf"
                        className="img-fluid mr-2"
                      />
                      Japanese
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="search-toggle iq-waves-effect" href="#">
                    <i className="ri-calendar-line"></i>
                  </a>
                  <div className="iq-sub-dropdown">
                    <div className="calender-small"></div>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#" className="search-toggle iq-waves-effect">
                    <div id="lottie-beil">
                      <Lottie data={data1Json} />
                    </div>

                    <span className="bg-danger dots"></span>
                  </a>
                  <div className="iq-sub-dropdown">
                    <div className="iq-card shadow-none m-0">
                      <div className="iq-card-body p-0 ">
                        <div className="bg-primary p-3">
                          <h5 className="mb-0 text-white">
                            All Notifications
                            <small className="badge  badge-light float-right pt-1">
                              4
                            </small>
                          </h5>
                        </div>

                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={require('../../assets/images/user/01.jpg')}
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Emma Watson Nik</h6>
                              <small className="float-right font-size-12">
                                Just Now
                              </small>
                              <p className="mb-0">95 MB</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={require('../../assets/images/user/02.jpg')}
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">New customer is join</h6>
                              <small className="float-right font-size-12">
                                5 days ago
                              </small>
                              <p className="mb-0">Jond Nik</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={require('../../assets/images/user/03.jpg')}
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Two customer is left</h6>
                              <small className="float-right font-size-12">
                                2 days ago
                              </small>
                              <p className="mb-0">Jond Nik</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={require('../../assets/images/user/04.jpg')}
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">New Mail from Fenny</h6>
                              <small className="float-right font-size-12">
                                3 days ago
                              </small>
                              <p className="mb-0">Jond Nik</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="search-toggle iq-waves-effect">
                    <div id="lottie-mail">
                      <Lottie data={data2Json} />
                    </div>
                    <span className="bg-primary count-mail"></span>
                  </a>
                  <div className="iq-sub-dropdown">
                    <div className="iq-card shadow-none m-0">
                      <div className="iq-card-body p-0 ">
                        <div className="bg-primary p-3">
                          <h5 className="mb-0 text-white">
                            All Messages
                            <small className="badge  badge-light float-right pt-1">
                              5
                            </small>
                          </h5>
                        </div>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={require('../../assets/images/user/01.jpg')}
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Nik Emma Watson</h6>
                              <small className="float-left font-size-12">
                                13 Jun
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={require('../../assets/images/user/02.jpg')}
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                              <small className="float-left font-size-12">
                                20 Apr
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={require('../../assets/images/user/03.jpg')}
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Why do we use it?</h6>
                              <small className="float-left font-size-12">
                                30 Jun
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={require('../../assets/images/user/04.jpg')}
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Variations Passages</h6>
                              <small className="float-left font-size-12">
                                12 Sep
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={require('../../assets/images/user/05.jpg')}
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                              <small className="float-left font-size-12">
                                5 Dec
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Collapse>
            <ul className="navbar-list">
              <li>
                <a
                  href="#"
                  className="search-toggle iq-waves-effect d-flex align-items-center bg-primary rounded"
                >
                  <img
                    src={require('../../assets/images/user/1.jpg')}
                    className="img-fluid rounded mr-3"
                    alt="user"
                  />
                  <div className="caption">
                    <h6 className="mb-0 line-height text-white">Nik jone</h6>
                    <span className="font-size-12 text-white">Available</span>
                  </div>
                </a>
                <div className="iq-sub-dropdown iq-user-dropdown">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body p-0 ">
                      <div className="bg-primary p-3">
                        <h5 className="mb-0 text-white line-height">
                          Hello Nik jone
                        </h5>
                        <span className="text-white font-size-12">
                          Available
                        </span>
                      </div>
                      <a href="#" className="iq-sub-card iq-bg-primary-hover">
                        <div className="media align-items-center">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-file-user-line"></i>
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0 ">My Profile</h6>
                            <p className="mb-0 font-size-12">
                              View personal profile details.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card iq-bg-primary-hover">
                        <div className="media align-items-center">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-profile-line"></i>
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0 ">Edit Profile</h6>
                            <p className="mb-0 font-size-12">
                              Modify your personal details.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card iq-bg-primary-hover">
                        <div className="media align-items-center">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-account-box-line"></i>
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0 ">Account settings</h6>
                            <p className="mb-0 font-size-12">
                              Manage your account parameters.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card iq-bg-primary-hover">
                        <div className="media align-items-center">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-lock-line"></i>
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0 ">Privacy Settings</h6>
                            <p className="mb-0 font-size-12">
                              Control your privacy parameters.
                            </p>
                          </div>
                        </div>
                      </a>
                      <div className="d-inline-block w-100 text-center p-3">
                        <button
                          type="button"
                          className="bg-primary iq-sign-btn"
                          onClick={this.handleLogout}
                        >
                          Sign out<i className="ri-login-box-line ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </NavBarStyle1>

          <div id="content-page" className={'content-page'}>
            <div className="container-fluid">
              <Switch>
                <Route exact path="/dashboard" component={Home} />
              </Switch>
            </div>
          </div>
        </div>

        <FooterStyle1 footerNavList={footerItems} title={footerTitle} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, { logoutRequest })(Index);