/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';

import '../../../assets/scss/style.scss';
import '../../../assets/css/style.css';
import '../../../assets/css/responsive.css';

import { index } from '../../../config/pluginsInit';

const AuthLayout = ({ children }) => {
  useEffect(() => {
    index();
  }, []);

  return (
    <>
      <section className="sign-in-page">
        <div className="container bg-white mt-5 p-0">
          <div className="row no-gutters">
            <div className="col-sm-6 align-self-center">
              <div className="sign-in-from">{children}</div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="sign-in-detail text-white">
                <a className="sign-in-logo mb-5" href="#">
                  <img
                    src={require('../../../assets/images/logo-white.png')}
                    className="img-fluid"
                    alt="logo"
                  />
                </a>
                <div
                  className="owl-carousel"
                  data-autoplay="true"
                  data-loop="true"
                  data-nav="false"
                  data-dots="true"
                  data-items="1"
                  data-items-laptop="1"
                  data-items-tab="1"
                  data-items-mobile="1"
                  data-items-mobile-sm="1"
                  data-margin="0"
                >
                  <div className="item">
                    <img
                      src={require('../../../assets/images/login/1.png')}
                      className="img-fluid mb-4"
                      alt="logo"
                    />
                    <h4 className="mb-1 text-white">Manage your orders</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                  <div className="item">
                    <img
                      src={require('../../../assets/images/login/1.png')}
                      className="img-fluid mb-4"
                      alt="logo"
                    />
                    <h4 className="mb-1 text-white">Manage your orders</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                  <div className="item">
                    <img
                      src={require('../../../assets/images/login/1.png')}
                      className="img-fluid mb-4"
                      alt="logo"
                    />
                    <h4 className="mb-1 text-white">Manage your orders</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthLayout;
