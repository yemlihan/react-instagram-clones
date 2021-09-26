import React, {useState, useEffect, useRef } from 'react';
import '../assets/css/home.css'
import Stories from './Stories'
import Suggestions from './Suggestions'
import Post from './Post'
import {IoIosConstruct} from 'react-icons/io';
import {gsap} from "gsap"

export default function Home() {

    // const overlayRef = useRef();
    // const overlayTitleRef = useRef();
    // let time = 0 ;
      
    // setInterval(timer,20);
    // clearInterval(clearTime);

    // function timer (){
    //     let loader = document.querySelector('.loader');
    //     let body = document.querySelector('body');
    //     if (time <= 99) {
    //         time++;
    //         body.style.overflowY = "hidden";
    //         loader.innerHTML = "%" + time;
    //     }
    //     else if(time == 100){
    //         setTimeout(() => {
    //             gsap.to(".overlay",{
    //                 duration :2 ,
    //                 y : -1000,
    //                 ease : "Power2.easeOut",
    //                 autoAlpha : 0
    //             })
    //             body.style.overflowY = "auto";
    //         }, 2000);
    //     }
    // }
    // useEffect(() => {
    //     gsap.to(overlayRef.current, {
    //         duration : 3,
    //         y : 100,
    //         ease : "Power1.easeInOut",
    //         scale : 2,
    //         rotate : 360
    //     })
    //     gsap.to(overlayTitleRef.current,{
    //         duration : 3,
    //         y : 100,
    //         rotate : 360
    //     })
    // })
    // function clearTime(){
    //     let loader = document.querySelector('.loader');
    //         if (time == 100) {
    //             time = 100;
    //             loader.innerHTML = 100;
    //         }
    // }
   
    return (
        <div>
            {/* <div className="overlay">
              <p ref={overlayRef}><IoIosConstruct size="150" color="#fff"/></p>
              <p ref={overlayTitleRef}><span className="overlay-title">Proje Yapım Aşamasında(Responsive etc.)</span></p>
              <p className="loader">0</p>
            </div> */}
            <section>
                <div className="container">
                    <div className="main col-12 d-flex">
                        <div className="posts col-8">
                            <Stories/>
                            <Post/>                        
                        </div>
                        <div className="suggestions col-4 position-fixed">
                            <Suggestions/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


