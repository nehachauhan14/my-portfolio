import React, { Component } from "react";
import style from"./Contact.module.scss";

const Contact = (props) => {
  return (
    <section id="contact" className={style.contactSection}>
      <div className={style.content}>
        <h1 className={style.contactTitle}>Get in touch</h1>
        <div className={style.contactSubTitle}>
          <div>Wanna get in Touch ?</div> 
          <span>Email me @</span>
          <span className={style.email}>
            <a href="mailto:nehachauhan79@gmail.com">nehachauhan79@gmail.com</a>
          </span>
        </div>
        <img
          src="/assets/images/dog.gif"
          alt="dog lover"
          className={style.dogImg}
        />
        <div className={style.bottomLine}>
          <div className={style.quote}>
            Living, learning, & leveling up one day at a time.
          </div>
          <div className={style.socialIcons}>
            <a href="https://www.linkedin.com/in/neha-chauhan-830278a1/">
              <svg
                className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
                style={{height: 24 + 'px'}}
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/chauhan8933/">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{height: 24 + 'px'}}>
                <path d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0" />
                <path d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0" />
                <path d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
              </svg>
            </a>
            <a href = "mailto: nehachauhan79@gmail.com">
              <svg
                className="svg-inline--fa fa-envelope fa-w-16 fa-fw"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="envelope"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
                style={{height: 24 + 'px'}}
              >
                <path
                  fill="currentColor"
                  d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                ></path>
              </svg>
            </a>
          </div>
          <div className={style.copyright}>
            <span>Designed &amp; Developed by Neha Chauhan</span>
          </div>
        </div>
        <span className={style.scrollIcon} title="Go to top" style={{display: "block"}} onClick={()=> {
          scrollTo(0, 0)
        }}><i className="fa fa-chevron-up"></i>
        </span>
      </div>
    </section>
  );
};

export default Contact;
