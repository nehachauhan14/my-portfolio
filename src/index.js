import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import './index.scss';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
class App extends Component {
  state = {
    showComponent: {
      "about": true,
      "projects": true,
      "blogs": true,
      "contact": true
    }
  }

  render() {
    return (
      <div>
          <Header />
          <div className="container">
            {this.state.showComponent.about  ? <About /> : ""}
            {/* {this.state.showComponent.projects  ? <Projects /> : ""} */}
            {/* {this.state.showComponent.blog  ? <Blogs /> : ""} */}
            {this.state.showComponent.contact  ? <Contact /> : ""}
          </div>
    </div>
    )
  }
};

ReactDOM.render(
 <App />,
 document.getElementById('app') 
);