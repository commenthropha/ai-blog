import React, {useState} from 'react';
import Image from 'next/image'
import Robot from '../../public/robot.png';
import styles from '../../styles/Header.module.css';

const Header = () => {
    return (
      <div className={`${styles.site__header} ${styles.section__padding}`} id ='home'>
        <div className={styles.site__header_content}>
          <h1 className= {styles.gradient__text}>
            Discover The World of Artificial Intelligence
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
          Sign up to our newsletter to join a growing community of readers interested in the advent of technological advances. 
          </p>
          <div className={styles.site__header_content__input}>
            <input type="email" placeholder="Your Email Address"></input>
            <button type = "button">
              SUBSCRIBE
            </button>
          </div> 
        </div>
        <div className={styles.site__header_image}>
          <Image src={Robot} alt='Futuristic Robot'/>
        </div>
      </div>
    )
  }
  
  export default Header