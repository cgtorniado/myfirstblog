import React from 'react';
import { Link } from 'react-router-dom';
import Headerimg2 from '../Images/headerimg2.jpeg'
import Headerimg3 from '../Images/headerimg3.jpeg'
import ArticleContent from './ArticleContent';

const Hero = () => {
  return (
    <>

      <div className=" text-center d-flex flex-column justify-content-center hero container-fluid mt-n5 px-5">


        <div>
          <h1 className="display-1 text-primary">Let's be beautiful together</h1>
        </div>

        <div className="px-5">
          <p className="lead px-5 pt-3 fs-3">Hi, I'm Cleo and I love doing skincare and currently practicing how to do my make-up. Let's take this journey together
          </p>
        </div>
      </div>

      <div className="ui vertical stripe segment topsegmet p-5">
        <div className="ui middle aligned stackable grid container py-5">
          <div className="row">
            <div className="eight wide column p-5">
              <h1 className="display-1 text-primary">My First Entry</h1>
              <h3 className="ui header herobot">{[ArticleContent[0].title]}</h3>
              <p>Hi all! I'm new to blogging so please bear with me. Below is my first article and I hope that you'll like it!</p>
              <Link to="/blog"><span className="ui huge button">Read more</span></Link>
            </div>
            <div className="six wide right floated column">
              <img src={Headerimg2} className="ui large bordered rounded image" alt="header"/>
            </div>
          </div>
        </div>
      </div>

      <div className="ui vertical stripe segment p-5">
        <div className="ui text container pt-5">
        <h1 className="display-1 text-primary text-center">More for you</h1>
          <h3 className="ui header">My holy grail products</h3>
          <p>After years of trying and testing different kinds of products, I have my fair share of successful and failed trials. Here are the items that worked for me and I have purchased more than once!</p>
          <Link to="/products"><span className="ui large button">Discover</span></Link>

          <img src={Headerimg3} className="ui image py-5 headerimg3" alt="header" />

          <h3 className="ui header">Behind the mask</h3>
          <p>Hi, I'm a 20 year something woman from the Philippines who has a knack for trying out new products. I'm in not a medical professional who is qualified to give prescriptions. Just a student who shares what works for her. 💖 </p>
          <Link to="/aboutme"><span className="ui large button">Learn more</span></Link>
        </div>
      </div>
    </>
  )
}

export default Hero