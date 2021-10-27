import React from 'react';
import header from './header';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends React.Component {
  render() {
    return(
      <div>
        <header />
        <main />
        <footer />
      </div>
    )
  }
}


export default App;
export { header };
export {Main};
export {Footer};