import React, { Component } from 'react';
import Header from './header';
import Main from './main.js';
import Footer from './footer.js';
import SelectedBeast from './SelectedBeasts.js';
import beasts from './data.json'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      featuredBeast: {}
    }
  }

  closeModal = () => {
    this.setState({ show: false })
  }

  openModal = () => {
    this.setState({ show: true })
  }

  updateBeast = (beast) => {
    this.setState({
      featuredBeast: beast
    })
    this.openModal();
  }



  render() {
    return (
      <div>
        <Header />
        <Main updateBeast={this.updateBeast} beasts={beasts}/>
        <Footer />
        <SelectedBeast featuredBeast={this.state.featuredBeast} closeModal={this.closeModal} show={this.state.show}/>
      </div>
    )
  }
}