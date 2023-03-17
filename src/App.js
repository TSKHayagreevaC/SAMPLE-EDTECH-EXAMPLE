import { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Home from './components/Home';
import './App.css';


class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/login" component={Login} />
          <AuthenticatedRoute exact path="/" component={Home} />
          
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
