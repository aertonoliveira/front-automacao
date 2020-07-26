/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {index} from "../../config/pluginsInit";

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
      document.getElementById('body').className='sidebar-main-active right-column-fixed header-top-bgcolor'
    }
    componentWillUnmount() {
      document.getElementById('body').className=''
    }
    render() {
        
        return (
            <>
               <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-3">
                     <div className="iq-card">
                        <div className="iq-card-body">
                           <div className="d-flex align-items-center justify-content-between">
                              <h6>Invoice Sent</h6>
                              <span className="iq-icon"><i className="ri-information-fill"></i></span>
                           </div>
                           <div className="iq-customer-box d-flex align-items-center justify-content-between mt-3">
                              <div className="d-flex align-items-center">
                                 <div className="rounded-circle iq-card-icon iq-bg-primary mr-2"> <i className="ri-inbox-fill"></i></div>
                                 <h2>352</h2>
                              </div>
                              <div className="iq-map text-primary font-size-32"><i className="ri-bar-chart-grouped-line"></i></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                     <div className="iq-card">
                        <div className="iq-card-body">
                           <div className="d-flex align-items-center justify-content-between">
                              <h6>Credited From Accounts</h6>
                              <span className="iq-icon"><i className="ri-information-fill"></i></span>
                           </div>
                           <div className="iq-customer-box d-flex align-items-center justify-content-between mt-3">
                              <div className="d-flex align-items-center">
                                 <div className="rounded-circle iq-card-icon iq-bg-danger mr-2"><i className="ri-radar-line"></i></div>
                                 <h2>$37k</h2></div>
                               <div className="iq-map text-danger font-size-32"><i className="ri-bar-chart-grouped-line"></i></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                     <div className="iq-card">
                        <div className="iq-card-body">
                           <div className="d-flex align-items-center justify-content-between">
                              <h6>AVG Employee Costs</h6>
                              <span className="iq-icon"><i className="ri-information-fill"></i></span>
                           </div>
                           <div className="iq-customer-box d-flex align-items-center justify-content-between mt-3">
                              <div className="d-flex align-items-center">
                                 <div className="rounded-circle iq-card-icon iq-bg-warning mr-2"><i className="ri-price-tag-3-line"></i></div>
                                 <h2>32%</h2></div>
                               <div className="iq-map text-warning font-size-32"><i className="ri-bar-chart-grouped-line"></i></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                     <div className="iq-card">
                        <div className="iq-card-body">
                           <div className="d-flex align-items-center justify-content-between">
                              <h6>Average payment delay</h6>
                              <span className="iq-icon"><i className="ri-information-fill"></i></span>
                           </div>
                           <div className="iq-customer-box d-flex align-items-center justify-content-between mt-3">
                              <div className="d-flex align-items-center">
                                 <div className="rounded-circle iq-card-icon iq-bg-info mr-2"><i className="ri-refund-line"></i></div>
                                 <h2>27h</h2></div>
                               <div className="iq-map text-info font-size-32"><i className="ri-bar-chart-grouped-line"></i></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6 col-lg-7">
                     <div className="iq-card overflow-hidden">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Invoice Stats</h4>
                           </div>
                           <div className="iq-card-header-toolbar d-flex align-items-center">
                              <div className="dropdown">
                                 <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                                 <i className="ri-more-fill"></i>
                                 </span>
                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                    <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                    <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                    <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="home-chart-02"></div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-5">
                     <div className="iq-card">
                        <div className="iq-card-body p-0">
                          <img src={ require("../../assets/images/page-img/33.png") } alt="banner-img" className="rounded w-100 img-fluid" />
                          <div className="iq-caption">
                             <h1>450</h1>
                             <p>Invoice</p>
                          </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-8">
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Open Invoices</h4>
                           </div>
                           <div className="iq-card-header-toolbar d-flex align-items-center">
                              <div className="dropdown">
                                 <span className="dropdown-toggle text-primary" id="dropdownMenuButton5" data-toggle="dropdown">
                                 <i className="ri-more-fill"></i>
                                 </span>
                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton5">
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
                           <div className="table-responsive">
                              <table className="table mb-0 table-borderless">
                                 <thead>
                                    <tr>
                                       <th scope="col">Client</th>
                                       <th scope="col">Date</th>
                                       <th scope="col">Invoice</th>
                                       <th scope="col">Amount</th>
                                       <th scope="col">atatus</th>
                                       <th scope="col">Action</th>

                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>Ira Membrit</td>
                                       <td>18/10/2019</td>
                                       <td>20156</td>
                                       <td>$1500</td>
                                       <td><div className="badge badge-pill badge-success">Paid</div></td>
                                       <td>Copy</td>
                                    </tr>
                                    <tr>
                                       <td>Pete Sariya</td>
                                       <td>26/10/2019</td>
                                       <td>7859</td>
                                       <td>$2000</td>
                                       <td><div className="badge badge-pill badge-success">Paid</div></td>
                                       <td>Send Email</td>
                                    </tr>
                                    <tr>
                                       <td>Cliff Hanger</td>
                                       <td>18/11/2019</td>
                                       <td>6396</td>
                                       <td>$2500</td>
                                       <td><div className="badge badge-pill badge-danger">Past Due</div></td>
                                       <td>Before Due</td>
                                    </tr>
                                    <tr>
                                       <td>Terry Aki</td>
                                       <td>14/12/2019</td>
                                       <td>7854</td>
                                       <td>$5000</td>
                                       <td><div className="badge badge-pill badge-success">Paid</div></td>
                                       <td>Copy</td>
                                    </tr>
                                    <tr>
                                       <td>Anna Mull</td>
                                       <td>24/12/2019</td>
                                       <td>568569</td>
                                       <td>$10000</td>
                                       <td><div className="badge badge-pill badge-success">Paid</div></td>
                                       <td>Send Email</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Monthly Invoices</h4>
                           </div>
                           <div className="iq-card-header-toolbar d-flex align-items-center">
                              <div className="dropdown">
                                 <span className="dropdown-toggle" id="dropdownMenuButton1" data-toggle="dropdown" >
                                 <i className="ri-more-fill"></i>
                                 </span>
                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1" >
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
                          <ul className="suggestions-lists m-0 p-0">
                           <li className="d-flex mb-4 align-items-center">
                              <div className="profile-icon iq-bg-success"><span><i className="ri-check-fill"></i></span></div>
                              <div className="media-support-info ml-3">
                                 <h6>Camelun ios</h6>
                                 <p className="mb-0"><span className="text-success">17 paid</span> month out of 23</p>
                              </div>
                              <div className="media-support-amount ml-3">
                                 <h6><span className="text-secondary">$</span><b> 12,434.00</b></h6>
                                 <p className="mb-0">per month</p>
                              </div>
                           </li>
                           <li className="d-flex mb-4 align-items-center">
                              <div className="profile-icon iq-bg-warning"><span><i className="ri-check-fill"></i></span></div>
                              <div className="media-support-info ml-3">
                                 <h6>React</h6>
                                 <p className="mb-0"><span className="text-warning">Late payment 12 week</span> - pay invoice</p>
                              </div>
                              <div className="media-support-amount ml-3">
                                 <h6><span className="text-secondary">$</span><b> 12,434.00</b></h6>
                                 <p className="mb-0">per month</p>
                              </div>
                           </li>
                           <li className="d-flex mb-4 align-items-center">
                              <div className="profile-icon iq-bg-success"><span><i className="ri-check-fill"></i></span></div>
                              <div className="media-support-info ml-3">
                                 <h6>Camelun ios</h6>
                                 <p className="mb-0"><span className="text-success">17 paid</span> month out of 23</p>
                              </div>
                              <div className="media-support-amount ml-3">
                                 <h6><span className="text-secondary">$</span><b> 12,434.00</b></h6>
                                 <p className="mb-0">per month</p>
                              </div>
                           </li>
                           <li className="d-flex mb-4 align-items-center">
                              <div className="profile-icon iq-bg-danger"><span><i className="ri-check-fill"></i></span></div>
                              <div className="media-support-info ml-3">
                                 <h6>Camelun ios</h6>
                                 <p className="mb-0"><span className="text-danger">17 paid</span> month out of 23</p>
                              </div>
                              <div className="media-support-amount ml-3">
                                 <h6><span className="text-secondary">$</span><b> 12,434.00</b></h6>
                                 <p className="mb-0">per month</p>
                              </div>
                           </li>
                        </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-8">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="iq-card">
                              <div className="iq-card-body p-0">
                                 <img src={require("../../assets/images/booking/03.png")} className="img-fluid rounded w-100" alt="" />
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="iq-card">
                              <div className="iq-card-header d-flex justify-content-between">
                                 <div className="iq-header-title">
                                    <h4 className="card-title">Exchange Rates</h4>
                                 </div>
                                 <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                       <span className="dropdown-toggle" id="dropdownMenuButton-one" data-toggle="dropdown" >
                                       <i className="ri-more-fill"></i>
                                       </span>
                                       <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton-one" >
                                          <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                          <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                          <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                          <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                          <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="iq-card-body p-0">
                                 <div id="home-chart-01"></div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="iq-card">
                              <div className="iq-card-header d-flex justify-content-between">
                                 <div className="iq-header-title">
                                    <h4 className="card-title">Last costs</h4>
                                 </div>
                                 <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                       <span className="dropdown-toggle" id="dropdownMenuButton-two" data-toggle="dropdown" >
                                       <i className="ri-more-fill"></i>
                                       </span>
                                       <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton-two" >
                                          <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                          <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                          <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                          <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                          <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="iq-card-body p-0">
                                 <div id="home-chart-05"></div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="iq-card">
                              <div className="iq-card-header d-flex justify-content-between">
                                 <div className="iq-header-title">
                                    <h4 className="card-title">Efficiency</h4>
                                 </div>
                                 <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                       <span className="dropdown-toggle" id="dropdownMenuButton-three" data-toggle="dropdown" >
                                       <i className="ri-more-fill"></i>
                                       </span>
                                       <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton-three" >
                                          <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                          <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                          <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                          <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                          <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="iq-card-body p-0">
                                 <div id="home-chart-03"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Payment History</h4>
                           </div>
                           <div className="iq-card-header-toolbar d-flex align-items-center">
                              <div className="dropdown">
                                 <span className="dropdown-toggle" id="dropdownMenuButton-four" data-toggle="dropdown" >
                                 <i className="ri-more-fill"></i>
                                 </span>
                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton-four">
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
                          <ul className="suggestions-lists m-0 p-0">
                           <li className="d-flex mb-4 align-items-center">
                              <div className="profile-icon bg-secondary"><span><i className="ri-refresh-line"></i></span></div>
                              <div className="media-support-info ml-3">
                                 <h6>Deposit from ATL</h6>
                                 <p className="mb-0">5 march, 18:33</p>
                              </div>
                              <div className="media-support-amount ml-3">
                                 <h6 className="text-info">- 1,470</h6>
                                 <p className="mb-0">USD</p>
                              </div>
                           </li>
                           <li className="d-flex mb-4 align-items-center">
                              <div className="profile-icon bg-primary"><span><i className="ri-paypal-line"></i></span></div>
                              <div className="media-support-info ml-3">
                                 <h6>Deposit PayPal</h6>
                                 <p className="mb-0">5 march, 18:33</p>
                              </div>
                              <div className="media-support-amount ml-3">
                                 <h6 className="text-primary">+ 2,220</h6>
                                 <p className="mb-0">USD</p>
                              </div>
                           </li>
                           <li className="d-flex mb-4 align-items-center">
                              <div className="profile-icon bg-primary"><span><i className="ri-check-line"></i></span></div>
                              <div className="media-support-info ml-3">
                                 <h6>Deposit from ATL</h6>
                                 <p className="mb-0">5 march, 18:33</p>
                              </div>
                              <div className="media-support-amount ml-3">
                                 <h6 className="text-primary">+ 250</h6>
                                 <p className="mb-0">USD</p>
                              </div>
                           </li>
                           <li className="d-flex mb-4 align-items-center">
                              <div className="profile-icon bg-info"><span><i className="ri-close-line"></i></span></div>
                              <div className="media-support-info ml-3">
                                 <h6>Cancelled</h6>
                                 <p className="mb-0">5 march, 18:33</p>
                              </div>
                              <div className="media-support-amount ml-3">
                                 <h6 className="text-info">0</h6>
                                 <p className="mb-0">USD</p>
                              </div>
                           </li>
                           <li className="d-flex mb-4 align-items-center">
                              <div className="profile-icon bg-info"><span><i className="ri-arrow-go-back-fill"></i></span></div>
                              <div className="media-support-info ml-3">
                                 <h6>Refund</h6>
                                 <p className="mb-0">5 march, 18:33</p>
                              </div>
                              <div className="media-support-amount ml-3">
                                 <h6 className="text-info">- 500</h6>
                                 <p className="mb-0">USD</p>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="profile-icon bg-secondary"><span><i className="ri-refresh-line"></i></span></div>
                              <div className="media-support-info ml-3">
                                 <h6>Deposit from ATL</h6>
                                 <p className="mb-0">5 march, 18:33</p>
                              </div>
                              <div className="media-support-amount ml-3">
                                 <h6 className="text-info">- 1,470</h6>
                                 <p className="mb-0">USD</p>
                              </div>
                           </li>
                        </ul>
                        </div>
                     </div>

                  </div>
               </div>
             
            </>
        );
    }
}

export default Index;
