import React from 'react';
import Swiper from 'react-id-swiper';
// Version <= 2.3.2
// import 'react-id-swiper/lib/styles/css/swiper.css';
// Version >= 2.4.0
import 'swiper/css/swiper.css';
import HobbiesFormat from './HobbiesFormat'

const HobbyHeader = {
    fontSize: "4vw"
}
class HobbiesSlider extends React.Component {
    render() {
        const params = {
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: '3',
            pagination: {
                el: '.swiper-pagination',
                // el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30
        }

        return (
            <div>
                <h1 style={HobbyHeader}>Hobbies and Extracurriculars</h1>
                <Swiper {...params}>
                    <div class = "hobby">
                        <img src={require("../../images/modelun.png")} alt="munlogo" width="60%" height="80%" class="CenteredHover" />
                        <h1> Here is model Un </h1>
                    </div>
                    <div class = "hobby" >
                        <img src={require("../../images/robotics.jpg")} alt="munlogo" width="60%" height="80%" class="CenteredHover" />
                        <h1> Here is robotics </h1>
                    </div>
                    <div class = "hobby" >
                        <img src={require("../../images/robotics.jpg")} alt="munlogo" width="60%" height="80%" class="CenteredHover" />
                        <h1> Here is MEDLIFE </h1>
                    </div>
                    <div class = "hobby" >
                        <img src={require("../../images/robotics.jpg")} alt="munlogo" width="60%" height="80%" class="CenteredHover" />
                        <h1> Here is Badminton </h1>
                    </div>
                </Swiper >
            </div >
        )
    }
}
export default HobbiesSlider;