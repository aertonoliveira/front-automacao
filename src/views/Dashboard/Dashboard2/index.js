/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {index} from "../../../config/pluginsInit";
import {Row,Col} from "reactstrap";
import {SlickSliderStyle1} from '../../../components/vito'

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
               <div className="container-fluid">
                  <Row>
                     <Col lg={8}>
                     <div className="iq-card">
                        <div className="iq-card-body">
                           <div id="home-chart-06" style={{height: "350px"}}></div>
                        </div>
                     </div>
                  </Col>
                     <Col lg={4} className="col-lg-4">
                        <div className="iq-card">
                           <div className="iq-card-body smaill-calender-home">
                              <input type="text" className="flatpicker d-none" />
                           </div>
                        </div>
                     </Col>
                     <Col md={6} lg={3}>
                        <div className="iq-card">
                           <div className="iq-card-body">
                              <div className="text-center"><span>AVG Impressions</span></div>
                              <div className="d-flex justify-content-between align-items-center">
                                 <div className="value-box">
                                    <h2 className="mb-0"><span className="counter"><b>2.648</b></span></h2>
                                    <p className="mb-0 text-secondary line-height"> 26.84% </p>
                                 </div>
                                 <div className="iq-iconbox iq-bg-danger">
                                    <i className="ri-arrow-down-line"></i>
                                 </div>
                              </div>
                                 <div className="iq-progress-bar mt-5">
                                 <span className="bg-danger" data-percent="80" style={{ transition: "width 2s ease 0s", width: "80%" }} ></span>
                              </div>
                           </div>
                        </div>
                     </Col>
                     <Col md={6} lg={3}>
                        <div className="iq-card">
                           <div className="iq-card-body">
                              <div className="text-center"><span>AVG Engagements Rate</span></div>
                              <div className="d-flex justify-content-between align-items-center">
                                 <div className="value-box">
                                    <h2 className="mb-0"><span className="counter"><b>89.6</b></span></h2>
                                    <p className="mb-0 pl-2 text-secondary line-height"> 8.64% </p>
                                 </div>
                                 <div className="iq-iconbox iq-bg-info">
                                    <i className="ri-arrow-up-line"></i>
                                 </div>
                              </div>
                                 <div className="iq-progress-bar mt-5">
                                 <span className="bg-info" data-percent="50" style={{ transition: "width 2s ease 0s", width: "50%" }} ></span>
                              </div>
                           </div>
                        </div>
                     </Col>
                     <Col md={6} lg={3}>
                        <div className="iq-card">
                           <div className="iq-card-body">
                              <div className="text-center"><span>AVG Reach</span></div>
                              <div className="d-flex justify-content-between align-items-center">
                                 <div className="value-box">
                                    <h2 className="mb-0"><span className="counter"><b>826</b></span></h2>
                                    <p className="mb-0 pl-2 text-secondary line-height"> 0.86% </p>
                                 </div>
                                 <div className="iq-iconbox iq-bg-success">
                                    <i className="ri-arrow-up-line"></i>
                                 </div>
                              </div>
                              <div className="iq-progress-bar mt-5">
                                 <span className="bg-success" data-percent="66" style={{ transition: "width 2s ease 0s", width: "66%" }} ></span>
                              </div>
                           </div>
                        </div>
                     </Col>
                     <Col md={6} lg={3}>
                        <div className="iq-card">
                           <div className="iq-card-body">
                              <div className="text-center"><span>AVG Transport</span></div>
                              <div className="d-flex justify-content-between align-items-center">
                                 <div className="value-box">
                                    <h2 className="mb-0"><span className="counter"><b>7.55</b></span></h2>
                                    <p className="mb-0 pl-2 text-secondary line-height"> 25.5% </p>
                                 </div>
                                 <div className="iq-iconbox iq-bg-primary">
                                    <i className="ri-arrow-up-line"></i>
                                 </div>
                              </div>
                                 <div className="iq-progress-bar mt-5">
                                 <span className="bg-primary" data-percent="70" style={{ transition: "width 2s ease 0s", width: "70%" }} ></span>
                              </div>
                           </div>
                        </div>
                     </Col>
                  </Row>
                  <Row>
                      <div className="col-lg-8">
                        <div className="iq-card wow fadeInUp overflow-hidden" data-wow-delay="0.6s">
                           <div className="iq-card-header d-flex justify-content-between">
                              <div className="iq-header-title">
                                 <h4 className="card-title">Frequent Post List</h4>
                              </div>
                           </div>
                           <div className="iq-card-body">
                              <div className="table-responsive">
                                 <table className="table mb-0 table-borderless">
                                    <thead>
                                       <tr>
                                          <th scope="col">Package No.</th>
                                          <th scope="col">Date</th>
                                          <th scope="col">Delivery</th>
                                          <th scope="col">Status</th>
                                          <th scope="col">Location</th>
                                          <th scope="col">Progress</th>

                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td>#0879985</td>
                                          <td>26/12/2019</td>
                                          <td>30/12/2019</td>
                                          <td>
                                             <div className="badge badge-pill badge-success">Moving</div>
                                          </td>
                                          <td>Victoria 8007 Australia</td>
                                          <td>
                                             <div className="iq-progress-bar">
                                                <span className="bg-success" data-percent="90" style={{ transition: "width 2s ease 0s", width: "90%" }}  ></span>
                                             </div>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>#0879984</td>
                                          <td>23/12/2019</td>
                                          <td>27/12/2019</td>
                                          <td>
                                             <div className="badge badge-pill badge-warning text-white">Pending</div>
                                          </td>
                                          <td>Athens 2745 Greece</td>
                                          <td>
                                             <div className="iq-progress-bar">
                                                <span className="bg-warning" data-percent="70" style={{ transition: "width 2s ease 0s", width: "70%" }}  ></span>
                                             </div>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>#0879983</td>
                                          <td>18/12/2019</td>
                                          <td>21/12/2019</td>
                                          <td>
                                             <div className="badge badge-pill badge-danger">Canceled</div>
                                          </td>
                                          <td>Victoria 8007 Australia</td>
                                          <td>
                                             <div className="iq-progress-bar">
                                                <span className="bg-danger" data-percent="48" style={{ transition: "width 2s ease 0s", width: "48%" }}  ></span>
                                             </div>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>#0879982</td>
                                          <td>14/12/2019</td>
                                          <td>20/12/2019</td>
                                          <td>
                                             <div className="badge badge-pill badge-info">Working</div>
                                          </td>
                                          <td>Delhi 0014 India</td>
                                          <td>
                                             <div className="iq-progress-bar">
                                                <span className="bg-info" data-percent="90" style={{ transition: "width 2s ease 0s", width: "90%" }}  ></span>
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                      <div className="col-md-12 col-lg-4">
                       <div className="iq-card wow fadeInUp" data-wow-delay="0.8s">
                           <div className="iq-card-header d-flex justify-content-between">
                              <div className="iq-header-title">
                                 <h4 className="card-title">Post Summary</h4>
                              </div>
                              <div className="iq-card-header-toolbar d-flex align-items-center">
                                 <div className="dropdown">
                                    <span className="dropdown-toggle text-primary" id="dropdownMenuButton4" data-toggle="dropdown">
                                    <i className="ri-more-fill"></i>
                                    </span>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton4">
                                       <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                       <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                       <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                       <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                       <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="iq-card-body">
                              <p className="mb-0">Total of Likes $ Comments</p>
                              <div className="m-0 p-0 d-flex flex-wrap align-items-center justify-content-between">
                                 <div className="col-md-6">
                                    <div className="d-flex align-items-center  mt-4">
                                       <div className="iq-scale-border mr-3 like-block"></div>
                                       <div className="iq-scale-content">
                                          <h6>2.864</h6>
                                          <p className="mb-0">Likes</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="d-flex align-items-center  mt-4">
                                       <div className="iq-scale-border mr-3 comment-block"></div>
                                       <div className="iq-scale-content">
                                          <h6>624</h6>
                                          <p className="mb-0">Comments</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="d-flex align-items-center mt-4">
                                       <div className="iq-scale-border mr-3 share-block"></div>
                                       <div className="iq-scale-content">
                                          <h6>1.75</h6>
                                          <p className="mb-0">Share</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="d-flex align-items-center mt-4">
                                       <div className="iq-scale-border mr-3 repost-block"></div>
                                       <div className="iq-scale-content">
                                          <h6>345</h6>
                                          <p className="mb-0">Repost</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="d-flex align-items-center mt-4">
                                       <div className="iq-scale-border mr-3 view-block"></div>
                                       <div className="iq-scale-content">
                                          <h6>845</h6>
                                          <p className="mb-0">Views</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="d-flex align-items-center mt-4">
                                       <div className="iq-scale-border mr-3 post-block"></div>
                                       <div className="iq-scale-content">
                                          <h6>1200</h6>
                                          <p className="mb-0">Posts</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Row>
                   <Row className="row">
                         <div className="col-lg-12">
                           <div className="iq-card">
                           <div className="iq-card-header d-flex justify-content-between">
                              <div className="iq-header-title">
                                 <h4 className="card-title">Best Performing Posts</h4>
                              </div>
                           </div>
                           <div className="iq-card-body" id={'post-slider'}>
                              <SlickSliderStyle1 slidesToShow={2}>
                              <li className="d-flex align-items-center">
                                    <div className="post-image">
                                       <a href="#">
                                          <img src={require("../../../assets/images/page-img/p-2.jpg")} alt="post-image" className="img-fluid rounded" />
                                       </a>
                                    </div>
                                    <div className="post-content pl-3">
                                       <h4>How to Like Posts</h4>
                                       <h3 className="mt-2 mb-2">89.64%</h3>
                                       <div className="iq-progress-bar mb-3">
                                          <span className="bg-primary" data-percent="90" style={{ transition: "width 2s ease 0s", width: "90%" }}></span>
                                       </div>
                                       <div className="text-center d-flex align-items-center justify-content-between">
                                          <div className="iq-post-likes text-left">
                                             <a href="#" className="text-secondary"><i className="ri-heart-line mr-2"></i>6.2K</a>
                                          </div>
                                          <div className="iq-post-comments text-left ml-2 mr-2">
                                             <a href="#" className="text-secondary"><i className="ri-chat-1-fill mr-2"></i>6.2K</a>
                                          </div>
                                          <div className="iq-post-save text-left">
                                             <a href="#" className="text-secondary"><i className="ri-save-line mr-2"></i>6.2K</a>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="d-flex align-items-center">
                                    <div className="post-image">
                                       <a href="#">
                                          <img src={require("../../../assets/images/page-img/p-3.jpg")} alt="post-image" className="img-fluid rounded" />
                                       </a>
                                    </div>
                                    <div className="post-content pl-3">
                                       <h4>How to Comments Posts</h4>
                                       <h3 className="mt-2 mb-2">89.64%</h3>
                                       <div className="iq-progress-bar mb-3">
                                          <span className="bg-primary" data-percent="90" style={{ transition: "width 2s ease 0s", width: "90%" }}></span>
                                       </div>
                                       <div className="text-center d-flex align-items-center justify-content-between">
                                          <div className="iq-post-likes text-left">
                                             <a href="#" className="text-secondary"><i className="ri-heart-line mr-2"></i>6.2K</a>
                                          </div>
                                          <div className="iq-post-comments text-left ml-2 mr-2">
                                             <a href="#" className="text-secondary"><i className="ri-chat-1-fill mr-2"></i>6.2K</a>
                                          </div>
                                          <div className="iq-post-save text-left">
                                             <a href="#" className="text-secondary"><i className="ri-save-line mr-2"></i>6.2K</a>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="d-flex align-items-center">
                                    <div className="post-image">
                                       <a href="#">
                                          <img src={require("../../../assets/images/page-img/p-4.jpg")} alt="post-image" className="img-fluid rounded" />
                                       </a>
                                    </div>
                                    <div className="post-content pl-3">
                                       <h4>How to Share Posts</h4>
                                       <h3 className="mt-2 mb-2">89.64%</h3>
                                       <div className="iq-progress-bar mb-3">
                                          <span className="bg-primary" data-percent="90"  style={{ transition: "width 2s ease 0s", width: "90%" }}></span>
                                       </div>
                                       <div className="text-center d-flex align-items-center justify-content-between">
                                          <div className="iq-post-likes text-left">
                                             <a href="#"><i className="ri-heart-line mr-2"></i>6.2K</a>
                                          </div>
                                          <div className="iq-post-comments text-left ml-2 mr-2">
                                             <a href="#"><i className="ri-chat-1-fill mr-2"></i>6.2K</a>
                                          </div>
                                          <div className="iq-post-save text-left">
                                             <a href="#"><i className="ri-save-line mr-2"></i>6.2K</a>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="d-flex align-items-center">
                                    <div className="post-image">
                                       <a href="#">
                                          <img src={require("../../../assets/images/page-img/p-5.jpg") }alt="post-image" className="img-fluid rounded" />
                                       </a>
                                    </div>
                                    <div className="post-content pl-3">
                                       <h4>How to Repost </h4>
                                       <h3 className="mt-2 mb-2">89.64%</h3>
                                       <div className="iq-progress-bar mb-3">
                                          <span className="bg-primary" data-percent="90"  style={{ transition: "width 2s ease 0s", width: "90%" }}></span>
                                       </div>
                                       <div className="text-center d-flex align-items-center justify-content-between">
                                          <div className="iq-post-likes text-left">
                                             <a href="#" className="text-secondary"><i className="ri-heart-line mr-2"></i>6.2K</a>
                                          </div>
                                          <div className="iq-post-comments text-left ml-2 mr-2">
                                             <a href="#" className="text-secondary"><i className="ri-chat-1-fill mr-2"></i>6.2K</a>
                                          </div>
                                          <div className="iq-post-save text-left">
                                             <a href="#" className="text-secondary"><i className="ri-save-line mr-2"></i>6.2K</a>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                              </SlickSliderStyle1>
                           </div>
                        </div>
                         </div>
                   </Row>
            </div>
            </>
        );
    }
}

export default Index;
