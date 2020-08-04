import { createReducer, createActions } from 'reduxsauce';
import Imutable from 'seamless-imutable';
import { FALSE } from 'node-sass';

const { Types, Creators } = createActions({
 signIn1Request: ['email', 'password'],
 signInSucess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Imutable({
  sigendIn1: false,
  token: null,

});

export const success = (state, { token }) =>
    console.log('====================================');
    console.log(token);
    console.log('====================================');
   state.merge({ sigendIn1: true, token });

export const reducer = createReducer(INITIAL_STATE, {
   [Types.SIGN_IN_SUCESS]: success, 
});