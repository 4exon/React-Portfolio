import React, { Component } from 'react';
import moment from "Moment"
import { BrowerRouter as Router, Switch, Route } from 'react-router-dom';

import PortfolioContainer from "./portfolio/portfolio-container"
import NavigationContainer from "./portfolio/navigation-container"
import Home from "./pages/home";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import About from "./pages/about";
import PortfolioDetail from "./pages/portfolio-detail";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (

     

      <div className='app'>

       <router>
      <div>
      <h1>Asher Exon Portfolio</h1>
    <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <NavigationContainer />

      <switch>
      <Route exact path="/" component={Home } />
      <Route path="/about-me" component={About  } />
      <Route path="/contact" component={Contact } />
      <Route path="/blog" component={Blog } />
      <Route component={NoMatch} />
      </switch>

      </div>

       </router>
          


    
      </div>
    );
  }
}
