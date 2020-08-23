import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Skills from './components/Skills'

class App extends Component {

  render() {
    return (
      <div>
          <Header />
            <div className="container" id="main">
            <About />
            {/* {this.state.showComponent.projects  ? <Projects /> : ""} */}
            {/* {this.state.showComponent.blog  ? <Blogs /> : ""} */}
            <Skills />
            <Contact />
          </div>
    </div>
    )
  }
};

ReactDOM.render(
 <App />,
 document.getElementById('app') 
);