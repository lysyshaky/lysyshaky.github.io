import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">YURII LYSYSYHAK</h3>
            <p className="job">
              I'm UX/UI Designer and Full stack developer with over four years of professional
              experience in design prototyping. I'm able to developing WEB & Mobile applications using
              Javascript, Kotlin, and Dart. Able to architect, and enhance highly
              scalable systems, by leveraging best-in-class tools. 
            </p>

            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
