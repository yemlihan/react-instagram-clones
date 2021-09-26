import React from 'react'
import '../assets/css/suggestion.css'

function Suggestions() {
    return (
        <div className="suggestion col-12 d-flex flex-column">
            <div className="suggestion-user col-12 d-flex flex-row align-items-center">
                <div className="suggestion-user-icon col-3">
                    <img width="55" height="55" className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREg_8wFuqGPaekTW9jqmMMJPGfDxcCSHhRBw&usqp=CAU" alt="" />
                </div>
                <div className="suggestion-user-name col-7 pt-3">
                    <b>yemlihansapan</b><br />
                    <p>Yemlihan Sapan</p>
                </div>
                <div className="suggestion-user-change col-2">
                    <a href="#">Geçiş Yap</a>
                </div>
            </div>
            <div className="suggestion-foryou mt-3 col-12 d-flex flex-row align-items-center justify-content-between">
                <span className="col-6 for-you-span">Senin İçin Öneriler</span>
                <span className="col-6 d-flex justify-content-end all-see-span">Tümünü Gör</span>
            </div>
            <div className="suggestions-users col-12 mt-2">
                <div className="suggestion-item col-12 d-flex flex-row justify-content-between align-items-center">
                    <div className="suggestion-img col-1">
                        <img width="32" height="32" className="rounded-circle" src="https://i.pinimg.com/736x/47/44/72/474472f9ee549733f6998e65ba5766a9.jpg" alt="" />
                    </div>
                    <div className="suggestion-username col-8 d-flex flex-column ps-1">
                        <span className="all-see-span">ahmet</span>
                        <span className="for-you-span">Senin için öneriliyor</span>
                    </div>
                    <div className="suggestion-follow d-flex justify-content-end col-2">
                        <a href="#" className="text-decoration-none">Takip Et</a>
                    </div>
                </div>
            </div>
            <div className="suggestions-users col-12 mt-2">
                <div className="suggestion-item col-12 d-flex flex-row justify-content-between align-items-center">
                    <div className="suggestion-img col-1">
                        <img width="32" height="32" className="rounded-circle" src="https://i.pinimg.com/736x/47/44/72/474472f9ee549733f6998e65ba5766a9.jpg" alt="" />
                    </div>
                    <div className="suggestion-username col-8 d-flex flex-column ps-1">
                        <span className="all-see-span">sümeyye</span>
                        <span className="for-you-span">ahmet + 7 diğer kişi</span>
                    </div>
                    <div className="suggestion-follow d-flex justify-content-end col-2">
                        <a href="#" className="text-decoration-none">Takip Et</a>
                    </div>
                </div>
            </div>
            <div className="suggestions-users col-12 mt-2">
                <div className="suggestion-item col-12 d-flex flex-row justify-content-between align-items-center">
                    <div className="suggestion-img col-1">
                        <img width="32" height="32" className="rounded-circle" src="https://i.pinimg.com/736x/47/44/72/474472f9ee549733f6998e65ba5766a9.jpg" alt="" />
                    </div>
                    <div className="suggestion-username col-8 d-flex flex-column ps-1">
                        <span className="all-see-span">hacer</span>
                        <span className="for-you-span">sumeyye + 8 diğer kişi</span>
                    </div>
                    <div className="suggestion-follow d-flex justify-content-end col-2">
                        <a href="#" className="text-decoration-none">Takip Et</a>
                    </div>
                </div>
            </div>
            <div className="suggestions-users col-12 mt-2">
                <div className="suggestion-item col-12 d-flex flex-row justify-content-between align-items-center">
                    <div className="suggestion-img col-1">
                        <img width="32" height="32" className="rounded-circle" src="https://i.pinimg.com/736x/47/44/72/474472f9ee549733f6998e65ba5766a9.jpg" alt="" />
                    </div>
                    <div className="suggestion-username col-8 d-flex flex-column ps-1">
                        <span className="all-see-span">oğuz</span>
                        <span className="for-you-span">hacer + 2 diğer kişi</span>
                    </div>
                    <div className="suggestion-follow d-flex justify-content-end col-2">
                        <a href="#" className="text-decoration-none">Takip Et</a>
                    </div>
                </div>
            </div>
            <div className="suggestions-users col-12 mt-2">
                <div className="suggestion-item col-12 d-flex flex-row justify-content-between align-items-center">
                    <div className="suggestion-img col-1">
                        <img width="32" height="32" className="rounded-circle" src="https://i.pinimg.com/736x/47/44/72/474472f9ee549733f6998e65ba5766a9.jpg" alt="" />
                    </div>
                    <div className="suggestion-username col-8 d-flex flex-column ps-1">
                        <span className="all-see-span">mehmet</span>
                        <span className="for-you-span">oğuz + 12 diğer kişi</span>
                    </div>
                    <div className="suggestion-follow d-flex justify-content-end col-2">
                        <a href="#" className="text-decoration-none">Takip Et</a>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Suggestions
