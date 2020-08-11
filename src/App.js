import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    urlSrc: 'https://www.google.com/'
  }
  
  handleLink(src) {
    this.setState({urlSrc: src})
  }
render() {
  return (
    <div className="App">
      <div className="App-iFrame">
        <iframe src={this.state.urlSrc} height="800" width="1200"></iframe>
      </div>
      <ul className="App-ul">
        <li className="App-li" onClick={() => this.handleLink('https://www.linkedin.com/feed/')}>Camera 1</li>
        <li className="App-li" onClick={() => this.handleLink('Camera 2 IP')}>Camera 2</li>
        <li className="App-li" onClick={() => this.handleLink('Camera 3 IP')}>Camera 3</li>
        <li className="App-li" onClick={() => this.handleLink('Camera 4 IP')}>Camera 4</li>
        <li className="App-li" onClick={() => this.handleLink('Camera 5 IP')}>Camera 5</li>
        <li className="App-li" onClick={() => this.handleLink('Camera 6 IP')}>Camera 6</li>
      </ul>
      
     {/* <h1> this is the src: {this.state.urlSrc}</h1>  */}
    </div>
  );
}
}

export default App;
