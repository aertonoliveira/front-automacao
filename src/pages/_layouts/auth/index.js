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
            <div className="col-sm-12 align-self-center">
              <div className="sign-in-from">{children}</div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthLayout;
