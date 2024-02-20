import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* <Nav /> */}
          <Routes>
            <Route
             exact path="/"
              element={<News  key="general" pageSize={6} category='general' />}
            />
            <Route
             exact  path="/business"
              element={<News key="business" pageSize={6} category='business' />}
            />
            <Route
              exact path="/entertainment"
              element={<News key="entertainment" pageSize={6} category='entertainment' />}
            />
            <Route
            exact  path="/general"
              element={<News key="general" pageSize={6} category='general' />}
            />
            <Route
             exact  path="/health"
              element={<News key="health" pageSize={6} category='health' />}
            />
            <Route
             exact  path="/science"
              element={<News key="science"pageSize={6} category='science' />}
            />
            <Route
             exact  path="/sports"
              element={<News key="sports" pageSize={6} category='sports' />}
            />
            <Route
               exact path="/technology"
              element={<News key="technology" pageSize={6} category='technology' />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
