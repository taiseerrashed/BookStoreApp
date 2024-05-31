import React from 'react';
import image from "./about-bg.png";
import "./About.css";

const About = () => {
  return (
    <section className="about">
        <div className="about-wrapper">
            <div className="about-info">
                <h2>About Us</h2>
                <p>We are an online book store</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel incidunt qui cumque iste, totam eos recusandae
                    exercitationem dignissimos vitae excepturi. Iusto nesciunt voluptatibus esse hic..
                </p>
                <p>
                    <strong>Version: 1.0.0</strong>
                </p>
            </div>
            <div className="about-image">
                <img src={image} alt="AboutIamge" />
            </div>
        </div>
    </section>
  );
};

export default About;