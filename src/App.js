import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './assets/css/reset.css'
import Header from './components/Header';
import Home from './components/Home';
import MessageBox from './components/MessageBox';
import Explore from './components/Explore';
import Profile from './components/Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {

  
    const headerCss = {
        width : "100%",
        background : "#fff",
        position : "fixed",
        top : "0",
        left : "0",
        borderBottom : "1px solid rgba(var(--b6a,219,219,219),1)"
    }

    return ( 
      <Router>
          <section style={headerCss}>
                    <Header/>  
          </section> 
          <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/message" exact component={MessageBox}/>
                <Route path="/explore" exact component={Explore}/>
                <Route path="/profile" exact component={Profile}/>
          </Switch>
      </Router>
    )
}

export default App;