import React, {
  Component
}
from 'react';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }

  }





  render() {
    return <div> Hello World!! </div>
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1> Hello World </h1>
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>

//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;