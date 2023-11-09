import React from 'react'
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo3 from './imageLogo/logoofimmi.png'
import email111 from './imageLogo/emaillgogo.png'
import fb from './imageLogo/facebbok.png'
import twitter from './imageLogo/twitter.png'
import inst from './imageLogo/instagram.png'
import link from './imageLogo/linkedin.png'
import you from './imageLogo/youtube.png'
import phonegaya from './imageLogo//phoneagya.png'
import window from './imageLogo/windows.png'
import mac from './imageLogo/apple_.png'
import google from './imageLogo/dsooobaba.png'
import ico121 from './imageLogo/dsomatag.png'
import { useNavigate } from 'react-router-dom';


export default function Footer() {
 const navigate = useNavigate();

    return (
        <footer className='footesadasdr'>
            <div className="footer-center pt-80 pb-30">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-3">

                            <div className='iot111er'>
                                <img src={logo3} alt='dfdffd' className='img-fluid imgf1ooter' />
                                <p className='paragraph1'>The Phanom platform is the ultimate solution for Institutions and Recruitment partners alike to unlock global access, gain awareness and achieve strategic objectives</p>

                                <div className=' mt-3'>
                                    <img src={fb} alt='' className='img-fluid footerimg' />
                                    <img src={twitter} alt='' className='img-fluid footerimg' />
                                    <img src={inst} alt='' className='img-fluid footerimg' />
                                    <img src={link} alt='' className='img-fluid footerimg' />
                                    <img src={you} alt='' className='img-fluid footerimg' />
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-3">
                            <div className='headofice1'>


                                <h1 className='h1gfooter '>
                                    Head Office
                                </h1>

                                <p className='mt-1 p1ofo'> 24 Great Chapel Street, Soho London, UK. W1F 4FS</p>
                                <div className='flagbox22'>
                                    <div className=' gfhf'>
                                        <img src={email111} alt='img' className='img-fluid' />

                                    </div>
                                    <div className="contact-location ">
                                        <a className="afooter  " href="mailto:info@crizac.co.uk">info@Phanom.co.uk</a>
                                    </div>

                                </div>
                                <div className='flagbox22'>
                                    <div className=' gfhf'>
                                        <img src={phonegaya} alt='img' className='img-fluid' />

                                    </div>
                                    <div className="contact-location ">
                                        <a className="afooter  " href="phoneno:+44 2475 280303">+44 2475 280303</a>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-2 ">
                            <div className='headofice1'>
                                <h1 className='h1gfooter'>
                                    Become A Partner
                                </h1>
                                <button className='btn12button mt-2' onClick={()=>{navigate('/login')}}
                                >Join Now</button>

                                <h3 className='H3FOOTER mt-2'>REMOTE ASSITANCE</h3>

                                <div className='p_tag'> 

                                <div className='flagbox221'>
                                    <div className=' gfhf'>
                                        <img src={window} alt='img' className='img-fluid img-foter' />

                                    </div>
                                    <div className="contact-location ">
                                        <p className="afooter1  "> Window  </p>
                                    </div>

                                </div>

                                <div className='flagbox221'>
                                    <div className=' gfhf'>
                                        <img src={mac} alt='img'  className='img-fluid img-foter' />

                                    </div>
                                    <div className="contact-location ">
                                        <p className="afooter1  "> macOS  </p>
                                    </div>

                                </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-2 ">
                            <div className='headofice1'>
                                <h1 className='h1foo'>Phanom ltd</h1>
                                <div className='p_tag'>

                                <p className='p1foo'>Sign In</p>
                                <p className='p1foo'>About Us</p>
                                <p className='p1foo'>FAQ</p>
                                <p className='p1foo'> Contact Us</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-2 ">
                            <div className='headofice1'>
                                <p className='p1ffo2'>Download App</p>
                                <div className='p_tag'>

                                <div className=' flagfooter'>
                                    <img src={google} alt='img' className='img-fluid img-foter1' />

                                </div>
                                <div className=' flagfooter'>
                                    <img src={ico121} alt='img'  className='img-fluid img-foter1' />

                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='copht'>
                <div className='container'>
                    <div className="row align-items-center text-lg-left text-center">
                        <div className="col-lg-6 hfh mb-lg-0 mb-2">
                            <div className='hfh mt-2'>
                                <p className='hhh12121212112'>&copy; {new Date().getFullYear()} Phanom Professional</p>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center text-lg-right">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <p >Privacy Policy</p>
                                </li>
                                <li className="list-inline-item">
                                    <p>Terms of Service</p>
                                </li>
                                <li className="list-inline-item ">
                                    <p>Contact Us</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )


}
