import React from "react";

function About() {
  return (
    <section id="about" className="s-about target-section">
      <div className="s-about__section s-about__section--profile">
        <div className="right-vert-line" />
        <div className="row">
          <div className="column large-6 medium-8 tab-full">
            <div className="section-intro" data-aos="fade-up">
              <h3 className="subhead">About Atiyah</h3>
              <h1 className="display-1">
                Life can be challenging at times, but when you push yourself to
                a higher ground. It will cause you to appreciate those difficult
                moments
              </h1>
            </div>
            <div className="profile-pic" data-aos="fade-up">
              <img
                src="images/profile-pic.jpg"
                srcSet="images/profile-pic.jpg 1x, images/profile-pic@2x.jpg 2x"
                alt=""
              />
            </div>
            <h3 data-aos="fade-up">Coding</h3>
            <p data-aos="fade-up">
              Hello World! Thank you for visiting my site. My name is Atiyah. I
              am an artist who loves art and music. I am sharing my class work
              with you. I am so grateful to be learning coding I want to be
              successful at this and grow in this market.
            </p>
            <br />
            <br />
            <p>
              This has not been an easy class for me. I am trying everyday to be
              better at this. I think it is important to understand the work
              that you are doing rather than how it looks. First, learn why you
              are using a certain if statment or function. If you do not
              understand the code, do not write it until you understand it. Once
              you understand the code,then you should focus on the design. I am
              being patient with myself because there is a lot of information to
              be have to absorbed. My work is not perfect, but it will
              eventually get better. I thank you for visiting my site and I am
              looking forward to everyone visting my site soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
