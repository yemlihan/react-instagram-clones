import React, { createContext,useState,useEffect } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './assets/css/reset.css'
import Header from './components/Header';
import Home from './components/Home';
import MessageBox from './components/MessageBox';
import Explore from './components/Explore';
import Profile from './components/Profile';
import Signin from './components/Signin'
import Signup from './components/Signup'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import users from './api/users.json'
import {MainContext} from './api/MainContext'
import {AuthContext} from './api/AuthContext'
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { useHistory } from 'react-router';

function App() {

    const history = useHistory();
    const auth = getAuth();
    const [user,setUser] = useState()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.email)
            } else {
                setUser(auth.currentUser)
            }
          });
    },[user])

    const userDatas = {
        user,
        setUser
    }
    const datas = {
        users
    }
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

            {user != null ? 
               <AuthContext.Provider value={userDatas}>
                    <section style={headerCss}>
                                <Header/>  
                    </section> 
                    <Switch>
                            <MainContext.Provider value={datas}>
                                <Route path="/" exact component={Home}/>
                                <Route path="/message" exact component={MessageBox}/>
                                <Route path="/explore" exact component={Explore}/>
                                <Route path="/profile" exact component={Profile}/>
                            </MainContext.Provider>
                    </Switch>
               </AuthContext.Provider>
            :
                    <Switch>
                        <Route path="/signin" exact component={Signin}/>
                        <Route path="/signup" exact component={Signup}/>
                    </Switch>
             }
      </Router>
    )
}

export default App;