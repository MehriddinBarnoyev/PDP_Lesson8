// Home.js
import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import HomeSection from '../../Sections/HomeSection';
import './Home.css';

export default class Home extends Component {

  render() {

    return (
      
      <div id='home'>
       
        <Header />
        <HomeSection />
      </div>
    );
  }
}
