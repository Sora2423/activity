import React from 'react'
import Tech_video from '../assets/video/Tech_video.mp4'
import experiences from '../assets/img/Hero/experiences.webp'
import Dots from '../assets/img/illustrations/Dots.webp'
import roadmap from '../assets/img/icons/roadmap.svg'
import userswm from '../assets/img/icons/users-wm.svg'
import Share91 from '../assets/img/icons/share-91.svg'
import Videomeeting from '../assets/img/icons/video_meeting.svg'
import Openingtimes from '../assets/img/icons/opening-times.svg'
import Cardfavorite from '../assets/img/icons/card-favorite.svg'
import Wave2 from '../assets/img/illustrations/Wave_2.svg'

const Sxthpage = () => {
    return (
            <section class="experience position-relative overflow-hidden" id="service">
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                <div class="position-relative z-1 text-center mb-8 mb-lg-9 video-player-paused" data-video-player-container="data-video-player-container"><video class="w-100 h-100 rounded-4" src={Tech_video} poster={experiences} type="video/mp4" data-video-player="data-video-player"></video>
                    <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 rounded-4 bg-1100 object-cover" data-overlay="data-overlay"> </div><button class="btn play-button position-absolute justify-content-center align-items-center bg-white rounded-circle cursor-pointer" data-play-button="data-play-button"> <img class="play-icon w-25" src="assets/img/illustrations/play-solid.svg" alt="" data-play-icon="data-play-icon" /><img class="pause-icon w-25" src="assets/img/illustrations/pause-solid.svg" alt="" data-pause-icon="data-pause-icon" /></button>
                    <div class="position-absolute dots d-none d-sm-block"><img class="img-fluid w-100" src={Dots.webp} alt="" /></div>
                </div>
                </div>
                <div class="col-md-8 col-lg-7">
                <h2 class="fs-4 fs-lg-3 fw-bold text-center text-white mb-5 mb-lg-9 lh-sm">We made this app to solve your problems.</h2>
                </div>
                <div class="col-12">
                <div class="row gy-4 g-md-3 pb-8 pb-lg-11 px-1">
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src= {roadmap} alt="" />
                    <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">Unlimited Projects</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">Manage multiple projects at once and for seamless business operation.</p>
                    </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src={userswm} alt="" />
                    <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">Team Management</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">Manage your cross-functional teams better than ever with our easily manageable app.</p>
                    </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src={Share91} alt="" />
                    <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">File Sharing</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">Easily share files where necessary and keep them safe with enhanced security and protection.</p>
                    </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src={Videomeeting} alt="" />
                    <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">Video Meeting</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">Conduct video meetings and keep records for further use with its cloud storage.</p>
                    </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src={Openingtimes} alt="" />
                    <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">Time Tracking</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">Track time to ensure meeting all the deadlines and never lag behind managing multiple projects.</p>
                    </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src={Cardfavorite} alt="" />
                    <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">Payment System</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">With its easy payment system create invoices and get paid all at the same place.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="position-absolute top-0 start-0 end-0">
            <div class="bg-white py-3 py-md-9 py-xl-10"> </div><img class="wave" src={Wave2} alt="" />
            </div>
        </section>
    )
}

export default Sxthpage
