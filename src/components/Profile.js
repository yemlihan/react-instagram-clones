import React, { useState } from 'react'
import '../assets/css/profile.css'
import {IoIosSettings} from 'react-icons/io'
import {AiOutlineTable,AiOutlineCodeSandbox,AiOutlineSave} from 'react-icons/ai'
import {BiUserPin} from 'react-icons/bi'

export default function Profile() {

    const [collapse,setCollapse] = useState(1)


    const showCollapse = (index) => {
        setCollapse(index)
    }
    return (
        <div>
             <section style={{marginTop: "85px"}}>
                <div className="container">
                    <div className="main d-flex flex-column w-100">
                        <div className="profile-info d-flex">
                                <div className="profile-icon">
                                    <img width="150" height="150" className="rounded-circle" src="https://play-lh.googleusercontent.com/GNF5wSF3XNLIZv0iMajukuMjz23E7XiQtgyJNI6P0ZeGMBYT8fonyv8u_q1Qwpmj3g" alt="" />
                                </div>
                                <section>
                                    <div className="profile-all-infos d-flex flex-column w-100">
                                        <div className="profile-settings mb-4 d-flex">
                                            <span>username</span>
                                            <div className="profile-edit ps-4">
                                                <button>Profili Düzenle</button>
                                            </div>
                                            <div className="profile-setting-icon ps-3">
                                                <IoIosSettings size="30"/>
                                            </div>
                                        </div>
                                        <div className="profile-followers d-flex">
                                            <ul className="list-style-none">
                                                <li><span className="span-counter">15</span> gönderi</li>
                                                <li><span className="span-counter">378</span> takipçi</li>
                                                <li><span className="span-counter">241</span> takip</li>
                                            </ul>
                                        </div>
                                        <div className="profile-username w-100 d-flex">
                                            <span className="span-counter">Name Surname</span>
                                        </div>
                                    </div>
                                </section>
                        </div>
                        <div className="profile-collapse block-tabs">
                            <ul className="tab p-0 d-flex w-100 justify-content-center align-items-center">
                                <li onClick={() => showCollapse(1)} className={collapse === 1 ? "active-tab" : "tabs"}><AiOutlineTable/> gönderiler</li>
                                <li onClick={() => showCollapse(2)} className={collapse === 2 ? "active-tab" : "tabs"}><AiOutlineCodeSandbox/> ig tv</li>
                                <li onClick={() => showCollapse(3)} className={collapse === 3 ? "active-tab" : "tabs"}><AiOutlineSave/> kaydedilenler</li>
                                <li onClick={() => showCollapse(4)} className={collapse === 4 ? "active-tab" : "tabs"}><BiUserPin/> etiketlenenler</li>
                            </ul>
                        </div>
                        <div className="profile-show-box content-tabs">
                            <div id="posts" className={collapse === 1 ? "active-content" : "content"}>
                                <div className="post-box">
                                    <img width="293" height="293" src="https://www.girisimhaberleri.com/wp-content/uploads/2021/01/Reels_IOSX_3.jpeg" alt="" />
                                </div>
                                <div className="post-box">
                                    <img width="293" height="293" src="https://cdn.btgunlugu.com/uploads/2020/11/Instagram-sifre-kirma-yontemleri.jpg" alt="" />
                                </div>
                                <div className="post-box">
                                    <img width="293" height="293" src="https://static.pembeteknoloji.com.tr/wp-content/uploads/2021/06/Instagram.png" alt="" />
                                </div>
                                <div className="post-box">
                                    <img width="293" height="293" src="https://cdn.vox-cdn.com/thumbor/3tBffyrKb7DEZxBmvYLCAS2IHN0=/0x0:1224x750/1200x800/filters:focal(515x278:709x472)/cdn.vox-cdn.com/uploads/chorus_image/image/69776263/visualsearchInstagram.0.jpeg" alt="" />
                                </div>
                                <div className="post-box">
                                    <img width="293" height="293" src="https://img.tamindir.com/2020/05/426141/com-instagram-android-android-screenshots-1.png" alt="" />
                                </div>
                                <div className="post-box">
                                    <img width="293" height="293" src="https://static.pembeteknoloji.com.tr/wp-content/uploads/2021/06/Instagram.png" alt="" />
                                </div>
                                <div className="post-box">
                                    <img width="293" height="293" src="https://www.girisimhaberleri.com/wp-content/uploads/2021/01/Reels_IOSX_3.jpeg" alt="" />
                                </div>
                                <div className="post-box">
                                    <img width="293" height="293" src="https://i.guim.co.uk/img/media/9c443a3b8fbb01a2dd0d3054838f172518d8f8d3/0_0_2480_1550/master/2480.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=2ab92b0a32be458d93e7e858611312c3" alt="" />
                                </div>
                                <div className="post-box">
                                    <img width="293" height="293" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/08/instagram-users-post-banner.png" alt="" />
                                </div>
                            </div>
                            <div id="ig-tv" className={collapse === 2 ? "active-content" : "content"}>
                                <span>Videolar</span>
                                <button type="button" className="btn">Yükle</button>
                            </div>
                            <div id="recorded" className={collapse === 3 ? "active-content" : "content"}>
                                <div className="newCollection d-flex justify-content-between mb-2">
                                    <span>Kaydettiklerini sadece sen görebilirsin</span>
                                    <a href="#">+ Yeni Koleksiyon</a>
                                </div>
                                <div className="recorded-main">
                                    <div className="recorded-box">
                                        <img width="293" height="293" src="https://www.girisimhaberleri.com/wp-content/uploads/2021/01/Reels_IOSX_3.jpeg" alt="" />
                                    </div>
                                    <div className="recorded-box">
                                        <img width="293" height="293" src="https://cdn.btgunlugu.com/uploads/2020/11/Instagram-sifre-kirma-yontemleri.jpg" alt="" />
                                    </div>
                                    <div className="recorded-box">
                                        <img width="293" height="293" src="https://static.pembeteknoloji.com.tr/wp-content/uploads/2021/06/Instagram.png" alt="" />
                                    </div>
                                    <div className="recorded-box">
                                        <img width="293" height="293" src="https://cdn.vox-cdn.com/thumbor/3tBffyrKb7DEZxBmvYLCAS2IHN0=/0x0:1224x750/1200x800/filters:focal(515x278:709x472)/cdn.vox-cdn.com/uploads/chorus_image/image/69776263/visualsearchInstagram.0.jpeg" alt="" />
                                    </div>
                                    <div className="recorded-box">
                                        <img width="293" height="293" src="https://img.tamindir.com/2020/05/426141/com-instagram-android-android-screenshots-1.png" alt="" />
                                    </div>
                                    <div className="recorded-box">
                                        <img width="293" height="293" src="https://static.pembeteknoloji.com.tr/wp-content/uploads/2021/06/Instagram.png" alt="" />
                                    </div>
                                    <div className="recorded-box">
                                        <img width="293" height="293" src="https://www.girisimhaberleri.com/wp-content/uploads/2021/01/Reels_IOSX_3.jpeg" alt="" />
                                    </div>
                                    <div className="recorded-box">
                                        <img width="293" height="293" src="https://i.guim.co.uk/img/media/9c443a3b8fbb01a2dd0d3054838f172518d8f8d3/0_0_2480_1550/master/2480.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=2ab92b0a32be458d93e7e858611312c3" alt="" />
                                    </div>
                                    <div className="recorded-box">
                                        <img width="293" height="293" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/08/instagram-users-post-banner.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id="tagged" className={collapse === 4 ? "active-content" : "content"}>
                                    <div className="tagged-box">
                                        <img width="293" height="293" src="https://www.girisimhaberleri.com/wp-content/uploads/2021/01/Reels_IOSX_3.jpeg" alt="" />
                                    </div>
                                    <div className="tagged-box">
                                        <img width="293" height="293" src="https://cdn.btgunlugu.com/uploads/2020/11/Instagram-sifre-kirma-yontemleri.jpg" alt="" />
                                    </div>
                                    <div className="tagged-box">
                                        <img width="293" height="293" src="https://static.pembeteknoloji.com.tr/wp-content/uploads/2021/06/Instagram.png" alt="" />
                                    </div>
                                    <div className="tagged-box">
                                        <img width="293" height="293" src="https://cdn.vox-cdn.com/thumbor/3tBffyrKb7DEZxBmvYLCAS2IHN0=/0x0:1224x750/1200x800/filters:focal(515x278:709x472)/cdn.vox-cdn.com/uploads/chorus_image/image/69776263/visualsearchInstagram.0.jpeg" alt="" />
                                    </div>
                                    <div className="tagged-box">
                                        <img width="293" height="293" src="https://img.tamindir.com/2020/05/426141/com-instagram-android-android-screenshots-1.png" alt="" />
                                    </div>
                                    <div className="tagged-box">
                                        <img width="293" height="293" src="https://static.pembeteknoloji.com.tr/wp-content/uploads/2021/06/Instagram.png" alt="" />
                                    </div>
                                    <div className="tagged-box">
                                        <img width="293" height="293" src="https://www.girisimhaberleri.com/wp-content/uploads/2021/01/Reels_IOSX_3.jpeg" alt="" />
                                    </div>
                                    <div className="tagged-box">
                                        <img width="293" height="293" src="https://i.guim.co.uk/img/media/9c443a3b8fbb01a2dd0d3054838f172518d8f8d3/0_0_2480_1550/master/2480.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=2ab92b0a32be458d93e7e858611312c3" alt="" />
                                    </div>
                                    <div className="tagged-box">
                                        <img width="293" height="293" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/08/instagram-users-post-banner.png" alt="" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
