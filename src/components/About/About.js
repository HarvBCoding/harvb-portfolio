import React from 'react';
import coverPhoto from "../../assets/cover/illustratedpropic.jpeg"

function About() {
    return (
        <section>
            <div className="about-image">
                <h1 id="about">Hello, I'm Bre Harvey</h1>
                <p id="subtitle">Full Stack Developer</p>
                <img src={coverPhoto} style={{ width: "50%" }} alt="cover"/>
            </div>
            <div className="about-content">
                <h3>About Me</h3>
                <p>Hi! I am Breania Harvey, thought I prefer to be called Bre. Thank you for taking the time to view my work. I am a Saint Louis based full stack developer attending coding bootcamp at Washington Unversity, also Saint Louis based. I am a detail-oriented, creative person who is excited about coding. I've always been someone who likes to make something beautiful out of nothing and web development gives me the opportunity to make something beautiful every day. </p>
            </div>
        </section>
    )
}

export default About;