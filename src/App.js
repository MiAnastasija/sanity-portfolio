import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import SinglePost from './components/SinglePost';
import Projects from './components/Projects';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
    <NavBar />  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        <Route path="/projects" component={Projects} />
        <Route path="/post/:slug" component={SinglePost} />

      </Switch>
    </Router>
  );
}

export default App;