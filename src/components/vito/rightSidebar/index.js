/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Progress} from 'reactstrap'

const index = (props) => {
    return (
        <>
        <div className="iq-card" style={{boxShadow: "none"}}>
            <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                    <h4 className="card-title">Customer Distribution</h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                    <div className="dropdown">
                    <span className="dropdown-toggle" id="dropdownMenuButton-five" data-toggle="dropdown">
                    <a href="#">See All</a>
                    </span>
                    </div>
                </div>
            </div>
            <div className="iq-card-body">
                <div id="chartdiv"></div>
            </div>
        </div>
        <div className="iq-card" style={{boxShadow: "none"}}>
               <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                     <h4 className="card-title">Project Statistic</h4>
                  </div>
               </div>
                <div className="iq-card-body pb-3">
                  <ul className="suggestions-lists m-0 p-0">
                     <li className="d-flex mb-4 align-items-center">
                        <div className="profile-icon iq-bg-danger"><span>G</span></div>
                        <div className="media-support-info ml-3">
                           <h6>Adding Item</h6>
                           <p className="mb-0">Development</p>
                        </div>
                        <div className="iq-card-header-toolbar d-flex align-items-center">
                           <div className="dropdown">
                              <span className="dropdown-toggle text-primary" id="dropdownMenuButton41" data-toggle="dropdown">
                              <i className="ri-more-line"></i>
                              </span>
                           </div>
                        </div>
                     </li>
                     <li className="d-flex align-items-center">
                        <div className="profile-icon iq-bg-warning"><span>B</span></div>
                        <div className="media-support-info ml-3">
                           <h6>Admin Panel</h6>
                           <p className="mb-0">Development</p>
                        </div>
                        <div className="iq-card-header-toolbar d-flex align-items-center">
                           <div className="dropdown">
                              <span className="dropdown-toggle text-primary" id="dropdownMenuButton42" data-toggle="dropdown">
                              <i className="ri-more-line"></i>
                              </span>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
        <div className="iq-card"  style={{boxShadow: "none"}}>
               <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                     <h4 className="card-title">Countries</h4>
                  </div>
                  <div className="iq-card-header-toolbar d-flex align-items-center">
                     <div className="dropdown">
                        <span className="dropdown-toggle text-primary" id="dropdownMenuButton6" data-toggle="dropdown">
                        <i className="ri-more-2-fill"></i>
                        </span>
                     </div>
                  </div>
               </div>
               <div className="iq-card-body">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="iq-details">
                           <span className="title text-dark">United States</span>
                           <div className="percentage float-right text-primary">95 <span>%</span></div>
                           <div className="iq-progress-bar-linear d-inline-block w-100">
                              <Progress value={95} className="iq-progress-bar" color=" bg-primary" />
                           </div>
                        </div>
                        <div className="iq-details mt-3">
                           <span className="title text-dark">India</span>
                           <div className="percentage float-right text-warning">75 <span>%</span></div>
                           <div className="iq-progress-bar-linear d-inline-block w-100">
                              <Progress value={75} className="iq-progress-bar" color=" bg-warning" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default index;
