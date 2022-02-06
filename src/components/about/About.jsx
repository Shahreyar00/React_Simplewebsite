import React from 'react';
import Award from "../../img/award.png";
import im2 from "../../img/im2.jpg";
import "./about.css";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    {/* <img src={im2} alt="" className="a-img" /> */}
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, perspiciatis?
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto asperiores a blanditiis tenetur ipsam, voluptate autem? Animi illo doloribus, consequatur, et repellat laboriosam velit ad tempore dolore excepturi atque.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design Award 2020</h4>
                        <p className="a-award-desc">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam ratione delectus debitis alias quasi sint eveniet doloribus distinctio qui.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
