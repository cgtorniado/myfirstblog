import React from 'react';
import Aboutmepic from '../Images/aboutme.png'

const AboutMe = () => {
  return (
    <>
      <div className="col-lg-8 mx-auto p-3 py-5">

        <main className="p-5">
          <h1 className="pt-5 text-primary display-3">Hi I'm Cleo </h1>
          <p className="fs-5 col-md-8">I am a former Industrial Engineer with 3 years of supply chain experience. I am interested in digital art, taking photos, and skincare.💖</p>


          <hr className="col-3 col-md-2 mb-5" />

          <div className="row g-5">
            <div className="col-md-6">
              <h2>My Skincare Journey</h2>
              <p>I started doing skincare after I graduated in college. I found it very therapeutic since it is a time for myself and time to unwind from all the hustle. Although skincare is not a requirement to be beautiful, putting time for yourself surely makes you feel btter. I love trying out sets as they usually come cheaper without the commitment. I am biased to scented products as well (although please note they're not necessarily better), I just love pretty scents.</p>
            </div>

            <div className="col-md-6">
              <h2>My projects ✨</h2>
              <p> As I'm currently an aspiring front-end web developer, I have tried doing a lot of projects</p>
              <ul className="icon-list">
                <li><a href="https://cgtorniado.github.io/">My First Website</a></li>
                <li><a href="https://cgtorniado.github.io/calculator/">E-calculator</a></li>
                <li><a href="https://journal-cgtorniado.vercel.app/">Journal</a></li>
                <li><a href="/#">Portfolio</a></li>
              </ul>
            </div>

            <div className="container message">
              <div className="row p-5 border rounded-5 align-items-center bg-light">

                <div className="col-12 col-md-8">

                  <h3 className="text-center text-lg-start" id="contactus"> Send me a message📝  </h3>
                  <div className="mb-3">
                    <input type="email" className="form-control" id="emailadd" placeholder="name@example.com" />
                  </div>


                  <div className="mb-3">
                    <textarea className="form-control" id="message" rows="3"
                      placeholder="Tell me your thoughts 💬"></textarea>
                  </div>

                  <div className="mb-3 text-center text-lg-start">
                    <a href="mailto:cleo.torniado@gmail.com?subject = Feedback&body = Message">
                      <span className='ui large button'>Send Feedback</span>
                    </a>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <img src={Aboutmepic}
                    className="img-fluid d-flex mx-auto rounded-5" alt="me" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default AboutMe