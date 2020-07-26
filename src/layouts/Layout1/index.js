/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
// Import for the page assets...
/*import { index } from "../../config/pluginsInit";*/
import '../../assets/scss/style.scss';
import '../../assets/css/main-css.css';

// Import Custom components...
import { Loader, SideBarStyle1, NavBarStyle1, FooterStyle1, Lottie } from '../../components/vito';
import data1Json from "../../assets/images/small/lottie-bell";
import data2Json from "../../assets/images/small/lottie-mail";
//Import Dashboard
import Home from '../../views/Home';
// import Dashboard1 from '../../views/Dashboard/Dashboard1';
import Dashboard2 from '../../views/Dashboard/Dashboard2'

import Calender from '../../views/App/Calender';
import Chat from '../../views/App/Chat';
import TodoList from '../../views/App/Todo/ToDoList';
import ProjectManagement from '../../views/App/ProjectManagement';
import ProjectManagement1 from '../../views/App/ProjectManagement/ProjectBoard';

import TimeLine from '../../views/ExtraPages/TimeLine';
import InvoicePage from '../../views/ExtraPages/InvoicePage';
import BlankPage from '../../views/ExtraPages/BlankPage';
import Pricing from '../../views/ExtraPages/Pricing';
import PricingOne from '../../views/ExtraPages/PricingOne';
import FAQPage from '../../views/ExtraPages/FAQPage';

//Import form components

import FormElement from '../../views/FormElements/FormElement';
import FormValidation from '../../views/FormElements/FormValidation';
import FormRadio from '../../views/FormElements/FormRadio';
import FormCheckBox from '../../views/FormElements/FormCheckBox';
import FormSwitch from '../../views/FormElements/FormSwitch';


// Import for the Email App
import Inbox from '../../views/App/Email/Inbox';
import EmailCompose from '../../views/App/Email/EmailCompose';

import Alert from '../../views/elements/Alert';
import Buttons from '../../views/elements/Buttons';
import Cards from '../../views/elements/Cards';
import Colors from '../../views/elements/Colors';
import Badges from '../../views/elements/Badges';
import BreadCrumb from '../../views/elements/BreadCrumb';
import Tooltips from '../../views/elements/Tooltips';
import Carousel from '../../views/elements/Carousel';
import Grid from '../../views/elements/Grid';
import Images from '../../views/elements/Images';
import Listgroup from '../../views/elements/Listgroup';
import Media from '../../views/elements/Media';
import Modal from '../../views/elements/Modal';
import Pagination from '../../views/elements/Pagination';
import Popovers from '../../views/elements/Popovers';
import Progressbars from '../../views/elements/Progressbars';
import Tabs from '../../views/elements/Tabs';
import Typography from '../../views/elements/Typography';
import Video from '../../views/elements/Video';
import Notifications from '../../views/elements/Notifications';

import { Switch, Route, Link } from 'react-router-dom'

// Import for the Tables App
import BasicTable from '../../views/Tables/BasicTables';
import DataTable from '../../views/Tables/DataTables';
import EditableTable from '../../views/Tables/EditableTables';

// Import Chart Pages
import MorrisChart from '../../views/Charts/MorrisCharts';
import AmChart from '../../views/Charts/AmCharts';
import ApexChart from '../../views/Charts/ApexCharts';

// Import Icons Pages
import Dripicons from '../../views/Icons/Dripicons';
import FontAwesomeIcons from '../../views/Icons/FontAwesomeIcons';
/*import LineFontAwesomeIcon from '../../views/Icons/LineFontAwesomeIcon';*/
import Remixicon from '../../views/Icons/IconRemixicon';
import IconUnicons from '../../views/Icons/IconUnicons';

// Import JSON Data...
import sideBarItems from '../../fakeData/json/sideBar';
/*import Loading from "react-loading-bar";*/

// Import Map Pages
import GoogleMaps from '../../views/Maps/GoogleMaps';
import { Collapse } from "reactstrap";
import RightSideBar from '../../components/vito/rightSidebar'

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
            items: [
                {
                    text: 'Dashboard',
                    href: '/dashboard1'
                },
                {
                    text: 'Home',
                    active: true
                }
            ],
            footerItems: [
                {
                    title: "Privacy Policy",
                    href: "/",
                },
                {
                    title: "Terms of Use",
                    href: "/",
                }
            ],
            searchItem: [
                {
                    name: 'Dashboard',
                    href: '/',
                    icon: 'ri-home-4-line pr-2'
                },
                {
                    name: 'Dashboard-1',
                    href: '/dashboard2',
                    icon: 'ri-home-3-line pr-2'

                },
                {
                    name: 'Chat',
                    href: '/chat',
                    icon: 'ri-message-line pr-2'

                },
                {
                    name: 'Calender',
                    href: '/calender',
                    icon: 'ri-calendar-2-line pr-2'

                },
                {
                    name: 'Profile',
                    href: '/dashboard',
                    icon: 'ri-profile-line pr-2'

                },
                {
                    name: 'Todo',
                    href: '/todo',
                    icon: 'ri-chat-check-line pr-2'

                },
                {
                    name: 'Email',
                    href: '/email/index',
                    icon: 'ri-mail-line pr-2'

                },
                {
                    name: 'Faq',
                    href: '/faq',
                    icon: 'ri-compasses-line pr-2'

                }
            ],
            topNavBar: [
                {
                    link: '/',
                    icon: 'ri-home-4-line'
                },
                {
                    link: '/chat',
                    icon: 'ri-chat-check-line'
                },
                {
                    link: '/todo',
                    icon: 'ri-question-answer-line'
                },
                {
                    link: '/email/index',
                    icon: 'ri-inbox-line'
                },
                {
                    link: '/calender',
                    icon: 'ri-file-list-line'
                },
                {
                    link: '/',
                    icon: 'ri-file-list-line'
                }

            ],

            footerTitle: "Copyright 2020 Vito All Rights Reserved.",
            collapsed: false
        }
    }
    componentDidMount() {
        /*index();*/
    }
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    };

    render() {
        const { items, footerItems, footerTitle, collapsed } = this.state;
        const currentPath = this.props.location.pathname;

        return (
            <>
                {/* Loader component */}
                <Loader />
                <div className="wrapper">

                    <SideBarStyle1
                        items={sideBarItems}
                        logo={require('../../assets/images/logo.gif')}
                        homeUrl={"/"}
                        currentPath={currentPath}
                    />

                    <NavBarStyle1
                        title={"Dashboard"}
                        homeUrl={"/"}
                        logo={require('../../assets/images/logo.gif')}
                        breadCrumb={items}
                    >
                        <div className="navbar-left">
                            <ul id="topbar-data-icon" className="d-flex p-0 topbar-menu-icon">
                                {
                                    this.state.topNavBar.map((item, index) => (
                                        <li className="nav-item" key={index}>
                                            <Link to={item.link} className="nav-link font-weight-bold search-box-toggle">
                                                <i className={item.icon}></i></Link>
                                        </li>
                                    ))
                                }


                            </ul>
                            <div className="iq-search-bar">
                                <form action="#" className="searchbox">
                                    <input type="text" className="text search-input" placeholder="Type here to search..." />
                                    <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                                    <div className="searchbox-datalink">
                                        <h6 className="pl-3 pt-3">Pages</h6>
                                        <ul className="m-0 pl-3 pr-3 pb-3">
                                            {
                                                this.state.searchItem.map((item, index) => (
                                                    <li className="iq-bg-primary-hover rounded" key={index}>
                                                        <Link to={item.href} className="nav-link router-link-exact-active router-link-active pr-2">
                                                            <i className={item.icon}></i>{item.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" onClick={this.toggleNavbar}>
                            <i className="ri-menu-3-line" />
                        </button>
                        <div className="iq-menu-bt align-self-center">
                            <div className="wrapper-menu">
                                <div className="main-circle"><i className="ri-arrow-left-s-line"></i></div>
                                <div className="hover-circle"><i className="ri-arrow-right-s-line"></i></div>
                            </div>
                        </div>
                        <Collapse isOpen={collapsed} navbar>
                            <ul className="navbar-nav ml-auto navbar-list">
                                <li className="nav-item">
                                    <a className="search-toggle iq-waves-effect language-title" href="#">
                                        <img src={require('../../assets/images/small/flag-01.png')}
                                            alt="img-flaf" className="img-fluid mr-1 height-16" />
                                            English
                                        <i className="ri-arrow-down-s-line"></i>
                                    </a>
                                    <div className="iq-sub-dropdown">
                                        <a className="iq-sub-card" href="#">
                                            <img src={require('../../assets/images/small/flag-02.png')}
                                                alt="img-flaf" className="img-fluid mr-2" />
                                                French
                                        </a>
                                        <a className="iq-sub-card" href="#">
                                            <img src={require('../../assets/images/small/flag-03.png')}
                                                alt="img-flaf" className="img-fluid mr-2" />
                                                Spanish
                                        </a>
                                        <a className="iq-sub-card" href="#">
                                            <img src={require('../../assets/images/small/flag-04.png')}
                                                alt="img-flaf" className="img-fluid mr-2" />
                                                Italian
                                        </a>
                                        <a className="iq-sub-card" href="#">
                                            <img src={require('../../assets/images/small/flag-05.png')}
                                                alt="img-flaf" className="img-fluid mr-2" />
                                                German
                                        </a>
                                        <a className="iq-sub-card" href="#">
                                            <img src={require('../../assets/images/small/flag-06.png')}
                                                alt="img-flaf" className="img-fluid mr-2" />
                                                Japanese
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="search-toggle iq-waves-effect" href="#"><i
                                        className="ri-calendar-line"></i></a>
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
                                                    <h5 className="mb-0 text-white">All Notifications<small
                                                        className="badge  badge-light float-right pt-1">4</small></h5>
                                                </div>

                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded"
                                                                src={require('../../assets/images/user/01.jpg')}
                                                                alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Emma Watson Nik</h6>
                                                            <small className="float-right font-size-12">Just Now</small>
                                                            <p className="mb-0">95 MB</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded"
                                                                src={require('../../assets/images/user/02.jpg')}
                                                                alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">New customer is join</h6>
                                                            <small className="float-right font-size-12">5 days
                                                                ago</small>
                                                            <p className="mb-0">Jond Nik</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded"
                                                                src={require('../../assets/images/user/03.jpg')}
                                                                alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Two customer is left</h6>
                                                            <small className="float-right font-size-12">2 days
                                                                ago</small>
                                                            <p className="mb-0">Jond Nik</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded"
                                                                src={require('../../assets/images/user/04.jpg')}
                                                                alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                            <small className="float-right font-size-12">3 days
                                                                ago</small>
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
                                                    <h5 className="mb-0 text-white">All Messages<small
                                                        className="badge  badge-light float-right pt-1">5</small></h5>
                                                </div>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded"
                                                                src={require('../../assets/images/user/01.jpg')}
                                                                alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Nik Emma Watson</h6>
                                                            <small className="float-left font-size-12">13 Jun</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded"
                                                                src={require('../../assets/images/user/02.jpg')}
                                                                alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                            <small className="float-left font-size-12">20 Apr</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded"
                                                                src={require('../../assets/images/user/03.jpg')}
                                                                alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Why do we use it?</h6>
                                                            <small className="float-left font-size-12">30 Jun</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded"
                                                                src={require('../../assets/images/user/04.jpg')}
                                                                alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Variations Passages</h6>
                                                            <small className="float-left font-size-12">12 Sep</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded"
                                                                src={require('../../assets/images/user/05.jpg')}
                                                                alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                            <small className="float-left font-size-12">5 Dec</small>
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
                                <a href="#" className="search-toggle iq-waves-effect d-flex align-items-center">
                                    <img src={require('../../assets/images/user/1.jpg')} className="img-fluid rounded mr-3" alt="user" />
                                    <div className="caption">
                                        <h6 className="mb-0 line-height">Nik jone</h6>
                                        <span className="font-size-12">Available</span>
                                    </div>
                                </a>
                                <div className="iq-sub-dropdown iq-user-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white line-height">Hello Nik jone</h5>
                                                <span className="text-white font-size-12">Available</span>
                                            </div>
                                            <a href="#" className="iq-sub-card iq-bg-primary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-primary">
                                                        <i className="ri-file-user-line"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">My Profile</h6>
                                                        <p className="mb-0 font-size-12">View personal profile
                                                        details.</p>
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
                                                        <p className="mb-0 font-size-12">Modify your personal
                                                        details.</p>
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
                                                        <p className="mb-0 font-size-12">Manage your account
                                                        parameters.</p>
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
                                                        <p className="mb-0 font-size-12">Control your privacy
                                                        parameters.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="d-inline-block w-100 text-center p-3">
                                                <a className="bg-primary iq-sign-btn" href="#" role="button">Sign
                                                out<i className="ri-login-box-line ml-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </NavBarStyle1>

                    <div id="content-page" className={"content-page"}>
                        <div className="container-fluid">
                            <TransitionGroup>
                                <CSSTransition
                                    key={this.props.location.key}
                                    classNames="dialog"
                                    timeout={300}
                                >
                                    <Switch location={this.props.location}>

                                        <Route path="/dashboard1" component={Home} />
                                        <Route path="/dashboard2" component={Dashboard2} />

                                        {/* Email App routes */}
                                        <Route path="/email/index" component={Inbox} />
                                        <Route path="/email/compose" component={EmailCompose} />
                                        <Route path="/chat" component={Chat} />
                                        <Route path="/calender" component={Calender} />
                                        <Route path="/todo" component={TodoList} />
                                        <Route path="/project-management" component={ProjectManagement} />
                                        <Route path="/project-management-demo" component={ProjectManagement1} />


                                        {/* UI elements routes */}
                                        <Route path="/alert" component={Alert} />
                                        <Route path="/cards" component={Cards} />
                                        <Route path="/buttons" component={Buttons} />
                                        <Route path="/colors" component={Colors} />
                                        <Route path="/badges" component={Badges} />
                                        <Route path="/breadCrumb" component={BreadCrumb} />
                                        <Route path="/tooltips" component={Tooltips} />
                                        <Route path="/carousel" component={Carousel} />
                                        <Route path="/video" component={Video} />
                                        <Route path="/grid" component={Grid} />
                                        <Route path="/images" component={Images} />
                                        <Route path="/list-group" component={Listgroup} />
                                        <Route path="/media" component={Media} />
                                        <Route path="/modal" component={Modal} />
                                        <Route path="/pagination" component={Pagination} />
                                        <Route path="/popovers" component={Popovers} />
                                        <Route path="/progress-bars" component={Progressbars} />
                                        <Route path="/tabs" component={Tabs} />
                                        <Route path="/typography" component={Typography} />
                                        <Route path="/notification" component={Notifications} />

                                        <Route path="/tables-basic" component={BasicTable} />
                                        <Route path="/tables-datatable" component={DataTable} />
                                        <Route path="/tables-editable" component={EditableTable} />

                                        <Route path="/chart-morris" component={MorrisChart} />
                                        <Route path="/chart-am" component={AmChart} />
                                        <Route path="/chart-apex" component={ApexChart} />

                                        {/* Form Elements */}
                                        <Route path={"/form"} component={FormElement} />
                                        <Route path={"/form-validation"} component={FormValidation} />
                                        <Route path={"/form-switch"} component={FormSwitch} />
                                        <Route path={"/form-radio"} component={FormRadio} />
                                        <Route path={"/form-checkbox"} component={FormCheckBox} />

                                        <Route path="/icon-dripicons" component={Dripicons} />
                                        <Route path="/icon-font-awesome" component={FontAwesomeIcons} />
                                        <Route path="/icon-line-awesome" component={FontAwesomeIcons} />
                                        <Route path={"/remixicon-icon"} component={Remixicon} />
                                        <Route path={"/unicons-icon"} component={IconUnicons} />

                                        <Route path="/map-google" component={GoogleMaps} />
                                        {/* Extra pages Routes */}
                                        <Route path="/timeline" component={TimeLine} />
                                        <Route path="/invoice" component={InvoicePage} />
                                        <Route path="/blank-page" component={BlankPage} />
                                        <Route path="/pricing" component={Pricing} />
                                        <Route path="/pricing-one" component={PricingOne} />
                                        <Route path="/faq" component={FAQPage} />


                                        <Route path="/" exect component={Home} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </div>

                </div>
                {
                    (currentPath === '/' || currentPath === '/dashboard1') ? (
                        <div className="iq-right-fixed">
                            <RightSideBar />
                        </div>
                    ) :
                        (
                            <div></div>
                        )
                }

                <FooterStyle1 footerNavList={footerItems} title={footerTitle} />
            </>
        );
    }
}

export default Index;
