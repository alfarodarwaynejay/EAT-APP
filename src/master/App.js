import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Modal from 'react-awesome-modal';
import logo from './logo.png';
import './App.css';

import Signin from '../components/Miscellaneous/Signin.js';
import Banner from '../components/Miscellaneous/Banner.js';
import Register from '../components/Miscellaneous/Register.js';
import Footer from '../components/Miscellaneous/Footer.js';
import Home from '../components/Home/Home.js';
import ButtonMaker from '../components/utilities/ButtonMaker.js'

import { connect } from 'react-redux';
import { setRoute, setLoginFailed, setRegisterFailed } from '../redux/actions.js'

const mapStateToProps = state => {
  return {
    route: state.setAppState.route,
    evaluate: state.setAppState.evaluate,
    loginFailed: state.setAppState.loginFailed,
    signinPending: state.setAppState.signinIsPending,
    registerPending: state.setAppState.registerIsPending,
    registerFailed: state.setAppState.registerFailed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRouteChange: route => dispatch(setRoute(route)),
    loginFailedToggle: bool => dispatch(setLoginFailed(!bool)),
    registerFailedToggle: bool => dispatch(setRegisterFailed(!bool)),
  }
};


const particleOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};



class App extends Component {

  render() {
    const { 
      route, 
      onRouteChange, 
      loginFailed, 
      loginFailedToggle, 
      signinPending, 
      registerPending,
      registerFailed,
      registerFailedToggle 
    } = this.props;

    return (
      <div className="App">
        <Particles className='particles'
              params={particleOptions}
        />
        <Modal //if wrong login this modal will show
          visible={loginFailed}
          effect={'fadeInUp'}
          width={'50%'}
        >
          <h1 className='red f4 f3-ns'>INCORRECT LOGIN</h1>
          
              <ButtonMaker 
                text='RETRY'
                className='link f6 f4-ns bg-orange hover-bg-red pa3 w-80' 
                onClick={() => loginFailedToggle(loginFailed)} 
              />
        </Modal>
        <Modal //this modal will always show while fetching to server
          visible={signinPending}
          effect={'fadeInUp'}
          width={'50%'}
        >
          <h1 className='red f4 f3-ns'>LOGGING IN...</h1>
        </Modal>

        <Modal //if wrong login this modal will show
          visible={registerFailed}
          effect={'fadeInUp'}
          width={'50%'}
        >
          <h1 className='red f4 f3-ns'>WRONG CREDENTIALS</h1>
          
              <ButtonMaker 
                text='RETRY'
                className='link f6 f4-ns bg-orange hover-bg-red pa3 w-80' 
                onClick={() => registerFailedToggle(registerFailed)} 
              />
        </Modal>
        <Modal //this modal will always show while fetching to server
          visible={registerPending}
          effect={'fadeInUp'}
          width={'50%'}
        >
          <h1 className='red f4 f3-ns'>SETTING CREDENTIALS...</h1>
        </Modal>

        <Banner 
          logo={logo} 
          route={route}
        />

        {
          route === 'home' ?
              <Home />
            : ( route === 'signin' ? 
                <Signin /> :
                <Register />
              )
        }
        
        <Footer />
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
