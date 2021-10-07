import React, { useCallback, useContext, useEffect, useState } from 'react'
import '../assets/css/signup.css'
import {AiFillFacebook} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useHistory} from 'react-router-dom';

export default function Signup() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [namesurname,setNameSurname] = useState("")
    const history = useHistory();
    const auth = getAuth();
    
    const signup = (e) => {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const username = document.getElementById('username').value
        const name_surname = document.getElementById('name_surname').value
        setEmail(email)
        setPassword(password)
        setUsername(username)
        setNameSurname(name_surname)
        if (isNaN(email) && isNaN(password)) {
            createUserWithEmailAndPassword(auth,email,password,username)
            .then((userCredential) => {
                // signup done
               history.push('/')
               userCredential.user.displayName = username
               userCredential.user.metadata = name_surname
            }).catch((error) => {   
                console.log('Error : ' ,error)
            })
        }else{
            alert("bos alanlar var!!!")
        }
    }

    return ( 
        <div className="container d-flex align-items-center justify-content-center flex-column">
            <div className="card mt-4">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <div className="card-facebook w-100 d-flex flex-column justify-content-center align-items-center text-center">
                        <span>Arkadaşlarının fotoğraf ve videolarını görmek için kaydol</span>
                        <button><AiFillFacebook size="20" className="me-1"/>Facebook ile Giriş Yap</button>
                    </div>
                    <div className="card-hr d-flex flex-row justify-content-center align-items-center mb-4 mt-3">
                                <div className="hr"></div>
                                <span>YA DA</span>
                                <div className="hr"></div>
                    </div>
                    <div className="card-inputs">
                        <input type="text" id="email" name="email" placeholder="Cep Telefonu Numarası veya E-posta"/>
                        <input type="text" name="name_surname" id="name_surname" placeholder="Adı Soyadı" />
                        <input type="text" name="username" id="username" placeholder="Kullanıcı Adı" />
                        <input type="password" id="password" name="password" placeholder="Şifre" />
                        <button onClick={signup}>Kaydol</button>
                    </div>
                    <div className="card-description">
                        <p>Kaydolarak, Koşullar'ı, Veri İlkesi'ni ve Çerezler İlkesi'ni kabul etmiş olursunuz.</p>
                    </div>
                </div>
            </div>
            <div className="account mt-3">
                <span>Hesabın var mı?</span>
                <Link to="/signin">
                    <span className="account-login">Giriş Yap</span>
                </Link>
            </div>
            <div className="app d-flex justify-content-center flex-column align-items-center mb-5">
                <span>Uygulamayı indir.</span>
                <div className="app-img mt-3">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png" alt="" />
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png" alt="" />
                </div>
            </div>
            <div className="footer d-flex mb-3">
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
                <div>Instagram Lite</div>
            </div>
            <div className="copyright mb-4 w-100 d-flex justify-content-center align-items-center">
                Türkçe ©2021 Instagram from Facebook
            </div>
        </div>
    )
}
