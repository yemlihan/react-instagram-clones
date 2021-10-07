import React, { useContext, useEffect, useState} from 'react'
import { auth } from '../firebase';
import { getAuth, signInWithEmailAndPassword , setPersistence,browserSessionPersistence } from "firebase/auth";
import '../assets/css/signin.css'
import {AiFillFacebook} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';


export default function Signin() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    const auth = getAuth();

    const login = (e) => {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        setEmail(email)
        setPassword(password)
               if (isNaN(email) && isNaN(password)) {
                signInWithEmailAndPassword(auth,email,password)
                .then((u) => {
                   //login
                   history.push('/')
                })
                .catch((error) =>{
                    alert("Yanlış Kullanıcı Bilgileri")
                    console.log("signinJs",error)
                    history.push('/signin')
                })
               }else{
                   console.log("boş geçilemez")
               }
    }
    //const add = (e) => {
       // e.preventDefault()
            //add users
            // try {
            //     const docRef =  addDoc(collection(db, "users"), {
            //     id : uuid(),
            //     username: name,
            //     password: password
            //     });
            // } catch (err) {
            //     console.error("Error adding document: ", err);
            // }



            // get users
            // let getTable =  getDocs(collection(db,"users"))
            // getTable.then(res => res.docs.map((item) => {
            //     setName(item.data().username)
            //     setPassword(item.data().password)
            // })) 

            //delete users
            // deleteDoc(doc(db,"users","vBUdQD0LbmJYbN4DC0iF"))

            //update users
            // let getDoc = doc(db,"users","vBUdQD0LbmJYbN4DC0iF")
            // updateDoc(getDoc,{
            //     username : "DENEME"
            // })
            
            
           
   // }

    // useEffect(() => {
    //     getAuth().onAuthStateChanged(authUser => {
    //         if(authUser){
    //             setUser(authUser)
    //         }else{
    //             setUser(null)
    //         }
    //     }) 
    // }, [])

    // const login = () => {
    //     const auth = getAuth();
    //     signInWithPopup(auth,provider)
    //     .then((result) => {
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         const token = credential.accessToken;
    //         const user = result.user;
    //         setUser(user)
    //     })
    // }

    return (
        <div>
           {/* { user ? 
           <div> 
               <h4>{user.displayName}</h4>
               <form action="">
                   <input type="text" placeholder="adınız" value={name} onChange={(e)=> setName(e.target.value)} />
                   <input type="password" placeholder="adınız" value={password} onChange={(e)=> setPassword(e.target.value)} />
                   <button onClick={add}>Kullanıcı Gönder</button>
               </form>
               {name}{password}
               <button onClick={() => auth.signOut()}>Çıkış Yap</button> 
            </div> : 
            <button type="button" onClick={login} className="btn btn primary">Google ile Kayıt Ol</button>
            } */}

            <div className="mt-4">
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="signin-img ">
                        <img src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" alt="" />
                    </div>
                    <div className="signin-form ">
                        <div className="card">
                            <div className="card-title">
                            </div>
                            <div className="card-body">
                                    <input type="text" name="email" id="email" placeholder="e-posta" />
                                    <input type="text" name="password" id="password" placeholder="şifre" />
                                    <button onClick={login}>
                                    <Link to="/">
                                       Giriş Yap
                                    </Link>
                                    </button>
                            </div>
                            <div className="card-hr d-flex flex-row justify-content-center align-items-center mb-4">
                                <div className="hr"></div>
                                <span>YA DA</span>
                                <div className="hr"></div>
                            </div>
                            <div className="card-login-forget">
                                <div className="card-login d-flex align-items-center mb-3">
                                    <AiFillFacebook size="20"/>
                                    <span className="ms-2">Facebook ile Giriş Yap</span>
                                </div>
                                <div className="card-forget mb-4">
                                    <span>Şifreni mi unuttun ?</span>
                                </div>
                            </div>
                        </div>
                        <div className="account-dont mt-2 p-3 d-flex justify-content-center align-items-center">
                            <span>Hesabın yok mu ? </span>
                            <Link to="/signup">
                                <button>Kaydol</button>
                            </Link>
                        </div>
                        <div className="download-app w-100 mt-4 d-flex justify-content-center flex-column align-items-center">
                            <span className="">Uygulamayı indir.</span>
                            <div className="download-app-image mt-3">
                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png" alt="" />
                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
                        <div className="footer-items d-flex">
                            <div>Hakkında</div>
                            <div>Blog</div>
                            <div>İş Fırsatları</div>
                            <div>Yardım</div>
                            <div>API</div>
                            <div>Gizlilik</div>
                            <div>Koşullar</div>
                            <div>Başlıca Hesaplar</div>
                            <div>Konu Etiketleri</div>
                            <div>Konumlar</div>
                            <div>İnstagram Lite</div>
                            <div>Güzellik</div>
                            <div>Dans</div>
                            <div>Fitness</div>
                            <div>Yiyecek ve İçeçek</div>
                            <div>Ev ve Bahçe</div>
                            <div>Müzik</div>
                            <div>Görsel Sanatlar</div>
                        </div>
                        <div className="footer-copyright mt-3">
                            <span>Türkçe</span>
                            <span>© 2021 Instagram from Facebook</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

