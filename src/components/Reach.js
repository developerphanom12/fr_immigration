import React from 'react'
import './Reach.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import background from '../ASSETS/hero-bg.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ggg from './imageLogo/646643333333333333333333333333-removebg-preview.png'
import fb from './imageLogo/facebbok.png'
import twitter from './imageLogo/twitter.png'
import inst from './imageLogo/instagram.png'
import link from './imageLogo/linkedin.png'
import you from './imageLogo/youtube.png'
import phone1111 from './imageLogo/emaillgogo.png'
import phone11111 from './imageLogo/phoneagya.png'


export default function Reach() {
  const openMap = () => {
    // Replace the following URL with the map service of your choice (e.g., Google Maps).
    const mapUrl = 'https://www.google.com/maps?q=Your+Location';
    window.open(mapUrl);
  };
  const immi999 = 'https://www.crizac.co.uk/catalog/view/theme/lexus_mayshop/new_design/img/icon/GooglePlay.png'
  const omiiii = 'https://www.crizac.co.uk/catalog/view/theme/lexus_mayshop/new_design/img/icon/ios-app.png'
  const email = 'phanomProfessonal@php.com';
  const phone = '0189276558'
  return (

    <>
      <div className='allfiled'>
        <div className="container-fluid">
          <div className='background'>
            <div className="row">
              <div className='col-lg-6 mt-5'>
                <div className='h1tag mt-5'>
                  <h1 className='haa1last mt-5'>Our Global Reach</h1>
                </div>

                <p className='p1tag33 mt-4'>Leverage our global presence and extensive network to extend your reach with Crizac today</p>

              </div>

              <div className='col-lg-6 '>
                <div className='imgtag'>
                  <img src={ggg} alt='hdbhjfd' className=' img-fluid jd' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='jhjd'>
        <div className='h12123dd '>
          <h1 className='h12123dd1   mt-3 mb-2'>Contact Us</h1>
        </div>
        <div className='hloimg'>
          <div className="container mt-1 jjhjhjh">
            <form >
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder='Enter Your Name'
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder='Enter Your Email'

                    />
                  </div>
                </div>

              </div>
            </form>
          </div>
          <div className="container mt-2 jjhjhjh">
            <form >
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder='Enter Your Address'

                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Phone</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder='Enter Your Phone'

                    />
                  </div>
                </div>

              </div>

            </form>
          </div>

        </div>
        <div className='h1tagyes'>
          <button type="submit" className="mt-4 fdsdf">Submit</button>
        </div>
        <div className='h121dd '>
          <h1 className='fdg23424 mt-3 '>Reach Us At</h1>
        </div>
        <div className='f1211112'>
          <div className="container-fluid f12ddsd12">

            <div className="row">

              <div className="col-lg-4 ">
                <div className='box-type mt-4 '>
                  <div className='univsseristy'>
                    <div className='flag-box'>
                      <div className='contact-rounded-box-content-flag-box ht83hd'>
                        <p className='reachp11'> Contact</p>
                      </div>

                    </div>

                  </div>
                  <div className='flag-box2'>
                    <div className='contact-rounded-box-content-flag-box ht83hd1 '>
                      <img src={phone1111} className='img-fluid' />

                    </div>
                    <div className="contact-rounded-box-content-location ">
                      <a className="text-left mail-id-address  " href="mailto:info@crizac.co.uk">info@crizac.co.uk</a>
                    </div>
                  </div>
                  <div className='flag-box2'>
                    <div className='contact-rounded-box-content-flag-box ht83hd1'>
                      <img src={phone11111} className='img-fluid' />

                    </div>
                    <div className="contact-rounded-box-content-location ">
                      <a className="text-left mail-id-address  " href="mailto:+44 2475 280303">+44 2475 280303</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className='box-type mt-4 '>
                  <div className='univsseristy'>
                    <div className='flag-box'>
                      <div className='contact-rounded-box-content-flag-box ht83hd1'>
                        <p className='reachp1'>  Head Office</p>
                      </div>
                    </div>

                    <p className='loation'>24 Great Chapel Street, Soho London, UK. W1F 4FS</p>

                  </div>
                  <div className='djndjcsdcvsdv'>
                    <p className='p122'>
                      Get Direction:
                      <a className='aw223' href="#" onClick={openMap}>Open Map</a>
                    </p>
                  </div>




                </div>
              </div>

              <div className="col-lg-4 ">
                <div className='box-type mt-4 '>
                  <div className='univsseristy'>
                    <div className='flag-box'>
                      <div className='contact-rounded-box-content-flag-box ht83hd'>
                        <p className='reachp1'>Follow Us</p>
                      </div>
                    </div>
                    <div className='divimsdgddlast mt-3'>
                      <img src={fb} alt='' className='img-fluid hgfgf1' />
                      <img src={twitter} alt='' className='img-fluid hgfgf1' />
                      <img src={inst} alt='' className='img-fluid hgfgf1' />
                      <img src={link} alt='' className='img-fluid hgfgf1' />
                      <img src={you} alt='' className='img-fluid hgfgf1' />
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>  </div>



      <div className='h121dd mt-5 '>
        <h1 className='fdg23424  '>Present in Countries</h1>
      </div>

      <div className='f1211112'>
        <div className="container-fluid f12ddsd12">

          <div className="row">

            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ht83hd'>
                      <img src='	https://www.crizac.co.uk/catalog/view/new_design/img/bangladesh-flag.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>BANGLADESH OFFICE</p>
                    </div>
                  </div>
                  <p className='loation'>CFS, Flat-S1, 3/4, lalmatia, Block-c, Dhaka-1207 Bangladesh.</p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:bangladesh@crizac.co.uk">bangladesh@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ht83hd1'>
                      <img src='	https://www.crizac.co.uk/catalog/view/new_design/img/cameroon_flag.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>CAMEROON OFFICE</p>
                    </div>
                  </div>
                  <p className='loation'>Iya Avenue, UB Junction, Molyko, Buea.</p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:Cameroon@crizac.co.uk">Cameroon@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ht83hd1'>
                      <img src='	https://www.crizac.co.uk/catalog/view/new_design/img/canada_flag.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>CANADA OFFICE</p>
                    </div>
                  </div>
                  <p className='loation'>469 Jarvis St, Toronto, ON M4Y 2G8, Canada</p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:canada@crizac.co.uk">canada@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ht83hd1'>
                      <img src='https://www.crizac.co.uk/catalog/view/new_design/img/china-flag.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>CHINA OFFICE</p>
                    </div>
                  </div>
                  <p className='loation'>

                    EPARK, Garden E, (Huayuan Road Community), No. 25 Huayuan North Road, Haidian District, Beijing
                  </p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:china@crizac.co.uk">china@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ht83hd1'>
                      <img src='https://www.crizac.co.uk/catalog/view/new_design/img/ghana_flag.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>GHANA OFFICE</p>
                    </div>
                  </div>
                  <p className='loation'>Presidential Floor, Independence Avenue, Ridge Mövenpick Ambassador Hotel, Accra, Ghana.
                  </p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:Ghana@crizac.co.uk">Ghana@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ht83hd1'>
                      <img src='	https://www.crizac.co.uk/catalog/view/new_design/img/india-flag.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>INDIA OFFICE</p>
                    </div>
                  </div>
                  <p className='loation'>Constantia Building, Wing A 11, Dr. U.N. Bramachari Street Kolkata-700 017</p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:india@crizac.co.uk">india@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ht83hd1'>
                      <img src='https://www.crizac.co.uk/catalog/view/new_design/img/kenya-flag.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>KENYA OFFICE</p>
                    </div>
                  </div>
                  <p className='loation'>Ikigai Nairobi (Westlands)
                    Peponi Rd, Nairobi, Kenya</p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:kenya@crizac.co.uk">kenya@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ht83hd1'>
                      <img src='https://www.crizac.co.uk/catalog/view/new_design/img/morocco-flag.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>MOROCCO OFFICE</p>
                    </div>
                  </div>
                  <p className='loation'>Centre d'affaires Contempo
                    71 boulevard Mohamed V angle with Rue d'Azilal, 3rd floor, Casablanca 20110, Morocco</p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:morocco@crizac.co.uk">morocco@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ffgfg ht83hd1'>
                      <img src='https://www.crizac.co.uk/catalog/view/new_design/img/nepal-flag.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>NEPAL OFFICE</p>
                    </div>
                  </div>
                  <p className='loation'>Jagannath Margh, Hattigauda, Budhanilkantha, Kathmandu, Nepal</p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:nepal@crizac.co.uk">nepal@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ffgfg ht83hd1'>
                      <img src='https://www.crizac.co.uk/catalog/view/new_design/img/nigeria-flag.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>
                        NIGERIA OFFICE</p>
                    </div>
                  </div>
                  <p className='loation1'>Maben Terrance, LFS Maben Rd Off Northern Foreshore Rd Off Chevron Drive Lekki, Lagos Nigeria
                  </p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:nigeria@crizac.co.uk">nigeria@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ffgfg ht83hd1'>
                      <img src='https://www.crizac.co.uk/catalog/view/new_design/img/united-kingdom.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>UK OFFICE</p>
                    </div>
                  </div>
                  <p className='loation'>24 Great Chapel Street, Soho London, UK. W1F 4FS</p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:uk@crizac.co.uk">nepal@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className='box-type mt-4 '>
                <div className='univsseristy'>
                  <div className='flag-box'>
                    <div className='contact-rounded-box-content-flag-box ffgfg ht83hd1'>
                      <img src='https://www.crizac.co.uk/catalog/view/new_design/img/vietnam-flag.png' className='DJJ' />

                    </div>
                    <div className="contact-rounded-box-content-location">
                      <p className='p1present'>VIETNAM OFFICE</p>
                    </div>
                  </div>
                  <p className='loation'>2nd Floor, Savina Building, 44 Trang Tien, Hoan Kiem, Hanoi</p>
                  <div className='hdiv22'>
                    <a class="text-left mail-id-address" href="mailto:vietnam@crizac.co.uk">vietnam@crizac.co.uk</a>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

      <div className='seclast mt-5'>
        <div className="container-fluid f1212">

          <div className="row">

            <div className="col-lg-8 ">
              <h2 className='hio-vi mt-3'>Get in Touch</h2>
              <p className='pio-vu'>If you have any questions, concerns or requests for further information, please send us a message and a member of our team will get in touch with you.</p>
            </div>

            <div className='col-lg-4'> 
              <div className='button-get mt-5'>

             
              <Button className='dfgvfsdg' variant="outline-success ">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  )
}
