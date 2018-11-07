import React, { Component } from 'react';
import Particles from 'react-particles-js';
import logo from './logo.png';
import './App.css';

import Signin from '../components/Miscellaneous/Signin.js';
import Banner from '../components/Miscellaneous/Banner.js';
import Register from '../components/Miscellaneous/Register.js';
import Footer from '../components/Miscellaneous/Footer.js';
import Home from '../components/Home/Home.js';

import { connect } from 'react-redux';
import { setRoute } from '../redux/actions.js'

const mapStateToProps = state => {
  return {
    route: state.setAppState.route,
    evaluate: state.setAppState.evaluate,
    isGod: state.setAppState.isGod
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRouteChange: route => dispatch(setRoute(route))
  }
};


const particleOptions = {
  particles: {
    number: {
      value: 35,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};



class App extends Component {

  render() {
    const { route, onRouteChange } = this.props;

    return (
      <div className="App">
        <Particles className='particles'
              params={particleOptions}
        />
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
