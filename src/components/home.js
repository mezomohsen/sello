import React from 'react';
import logoImg from '../assets/imgs/logo.png';
import imgHeader from '../assets/imgs/slider3-element1-1.png';
import imgoff1 from '../assets/imgs/women.jpg';
import imgoff2 from '../assets/imgs/Shell.png';
import imgoff3 from '../assets/imgs/Grey_Beanie.png';
import imgoff4 from '../assets/imgs/acessories.jpg';

function Home(){

    return (
        <div className="">
            <header class="BG-header">
                <div class="container container-mobile ">
                    <div class="after-sec row">
                        <p>01</p>
                        <hr />
                        <h6>INTRO</h6>
                    </div>
                    <div class="head-text">
                        <h1 data-aos="zoom-in" >SALE OFF! UP TO 70%</h1>
                        <p data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aos-duration="10000" data-aos-delay="300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="" class="btn btn-more" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-delay="600" data-aos-duration="10000">SHOP NOW</a>
                    </div>
                    <img src={imgHeader} class="img-cover" alt="slider1" data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="10000" />
                </div>
        </header>
        <section class="offers">
            <div class="container">
                <div class="after-sec row">
                    <p>02</p>
                    <hr />
                    <h6>OFFERS</h6>
                </div>
                <div class="row">
                    <div class="col-lg-6" data-aos="fade-right">
                        <div class="item-off">
                            <div class="overlay-off">OFF 50%</div>
                            {/* <img class="img-off" src={imgoff1} alt="" /> */}
                            <img class="img-off" src={require('../assets/imgs/women.jpg').default} alt="" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                       <div class="row">
                            <div class="col-lg-6" data-aos="fade-down">
                                
                                 <div class="item-off">
                                     <div class="overlay-off">OFF 50%</div>
                                    <img src={imgoff2} alt="" />
                                 </div>
                            </div> 
                           <div class="col-lg-6" data-aos="fade-left">
                               
                                 <div class="item-off">
                                     <div class="overlay-off">OFF 50%</div>
                                    <img src={imgoff3}  alt="" />
                                 </div>
                            </div> 
                           <div class="col-lg-12" data-aos="fade-up">
                                
                                 <div class="item-off">
                                     <div class="overlay-off">OFF 50%</div>
                                    <img src={imgoff4} alt="" />
                                 </div>
                            </div> 
                       </div>
                    </div>
                </div>
            </div>
        </section>
       </div>
    )
}

export default Home;