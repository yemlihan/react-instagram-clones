import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/header.css'
import {AiOutlineSearch,AiFillCloseCircle,AiFillHome,AiOutlineCompass,AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import { MainContext } from '../api/MainContext'
import { getAuth, onAuthStateChanged ,signOut } from "firebase/auth";
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../api/AuthContext'

function Header() {
    const auth = getAuth();
    const history = useHistory();
    const {user,setUser} = useContext(AuthContext)
    const [showResults,setShowResult] = useState(false)

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        history.push('/signin')
        }).catch((error) => {
        // An error happened.
        });
    }
    

    const activity = () => {
        if(showResults === false){
            let actIcon = document.querySelector('.activities');
            actIcon.style.display = "block"
            let actArrow = document.querySelector('.activities-arrow');
            actArrow.style.display = "block"
            let fillHeart = document.querySelector('.icon-fill');
            fillHeart.style.display = "block"
            let nullHeart = document.querySelector('.icon-null');
            nullHeart.style.display = "none"
            setShowResult(true)
        } 
        else{  
            let actIcon = document.querySelector('.activities');
            actIcon.style.display = "none"
            let actArrow = document.querySelector('.activities-arrow');
            actArrow.style.display = "none"
            let fillHeart = document.querySelector('.icon-fill');
            fillHeart.style.display = "none"
            let nullHeart = document.querySelector('.icon-null');
            nullHeart.style.display = "block"
            setShowResult(false)
        }
    }
    
    return (
        <div className="container">
            <div className="header">
            <div className="logo">
                <Link to="/">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
                </Link>
                <button onClick={logout}>Çıkış Yap</button>
            </div>
            <div className="search">
                <input type="text" id="search" name="search" placeholder="Ara"/>
                <span className="searchIcon">
                    <AiOutlineSearch size="13" className="searchIcons"/>
                </span>
                <span className="searchClose">
                    <AiFillCloseCircle size="16"/>
                </span>
            </div>
            <div className="notifications">
                    <div>
                        <Link to="/" className="text-dark">
                            <AiFillHome size="25"/>
                        </Link>
                    </div>
                    <div>
                        <Link to="/message" className="text-dark">
                            <RiMessengerLine size="25"/>
                        </Link>
                    </div>
                    <div>
                        <Link to="/explore" className="text-dark">
                            <AiOutlineCompass size="25"/>
                        </Link>
                    </div>
                    <div className="position-relative">
                        <AiOutlineHeart className="activity-icon icon-null" onClick={activity} size="25"/>
                        <AiFillHeart className="activity-icon icon-fill" onClick={activity} size="25"/>
                        <div className="activities-arrow"></div>
                        <div className="activities border border-1">
                            <div className="this-week-activities h-auto w-100 p-2">
                                <span style={{color: "rgba(var(--i1d,38,38,38),1)",fontWeight:"600",fontSize:"14px",lineHeight:"18px"}}>Bu Hafta</span>
                                <div className="week-activity w-100 d-flex flex-row align-items-center justify-content-between">
                                    <img width="45" height="45" className="rounded-circle" src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="" />
                                    <span><b>username</b> seni takip etmeye başladı. <span>4g</span></span>
                                    <button className="btn btn-primary ms-5">Takip Et</button>
                                </div>
                                <div className="week-activity w-100 d-flex flex-row align-items-center justify-content-between">
                                    <img width="45" height="45" className="rounded-circle" src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="" />
                                    <span><b>testusername</b> seni takip etmeye başladı. <span>4g</span></span>
                                    <button className="btn btn-primary ms-5">Takip Et</button>
                                </div>
                            </div>
                            <div className="this-month-activities h-auto w-100 p-2">
                            <span style={{color: "rgba(var(--i1d,38,38,38),1)",fontWeight:"600",fontSize:"14px",lineHeight:"18px"}}>Bu Ay</span>
                                <div className="week-activity w-100 d-flex flex-row align-items-center justify-content-between">
                                    <img width="45" height="45" className="rounded-circle" src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="" />
                                    <span><b>username</b> seni takip etmeye başladı. <span>4g</span></span>
                                    <button className="btn btn-primary ms-5">Takip Et</button>
                                </div>
                                <div className="week-activity w-100 d-flex flex-row align-items-center justify-content-between">
                                    <img width="45" height="45" className="rounded-circle" src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="" />
                                    <span><b>testusername</b> seni takip etmeye başladı. <span>4g</span></span>
                                    <button className="btn btn-primary ms-5">Takip Et</button>
                                </div>
                                <div className="week-activity w-100 d-flex flex-row align-items-center justify-content-between">
                                    <img width="45" height="45" className="rounded-circle" src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="" />
                                    <span><b>testusername</b> seni takip etmeye başladı. <span>4g</span></span>
                                    <button className="btn btn-primary ms-5">Takip Et</button>
                                </div>
                                <div className="week-activity w-100 d-flex flex-row align-items-center justify-content-between">
                                    <img width="45" height="45" className="rounded-circle" src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="" />
                                    <span><b>testusername</b> seni takip etmeye başladı. <span>4g</span></span>
                                    <button className="btn btn-primary ms-5">Takip Et</button>
                                </div>
                                <div className="week-activity w-100 d-flex flex-row align-items-center justify-content-between">
                                    <img width="45" height="45" className="rounded-circle" src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="" />
                                    <span><b>testusername</b> seni takip etmeye başladı. <span>4g</span></span>
                                    <button className="btn btn-primary ms-5">Takip Et</button>
                                </div>
                                <div className="week-activity w-100 d-flex flex-row align-items-center justify-content-between">
                                    <img width="45" height="45" className="rounded-circle" src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="" />
                                    <span><b>testusername</b> seni takip etmeye başladı. <span>4g</span></span>
                                    <button className="btn btn-primary ms-5">Takip Et</button>
                                </div>
                                <div className="week-activity w-100 d-flex flex-row align-items-center justify-content-between">
                                    <img width="45" height="45" className="rounded-circle" src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="" />
                                    <span><b>testusername</b> seni takip etmeye başladı. <span>4g</span></span>
                                    <button className="btn btn-primary ms-5">Takip Et</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-icons">
                        <Link to="/profile">
                            <img width="25" height="25" className="rounded-circle" src="https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ" alt="" />
                        </Link>
                    </div>
            </div>
        </div>  
        </div>
    )
}

export default Header
