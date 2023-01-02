import React, {useState} from 'react';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import styles from '../../styles/Navbar.module.css'

const Menu = () => (
  <>
  <p><a href ='#home'>Home</a></p>
  <p><a href ='#about'>What is AI?</a></p>
  <p><a href ='#recent'>Recent</a></p>
  <p id = {styles.blog_link}><a href ='#blog'>Blog</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className = {styles.site__navbar}>
      <div className= {styles.site__navbar_links}>
        <div className= {styles.site__navbar_links_logo}>
          <img src = 'next.svg' alt = "logo" />
        </div>
        <div className = {styles.site__navbar_links_container}>
          <Menu />
        </div>
      </div>
      <div className={styles.site__navbar_menu}>
       <Hamburger color='white' size={27} toggled={toggleMenu} toggle={setToggleMenu} />
        {toggleMenu &&(
          <div className = {`${styles.site__navbar_menu_container} ${styles.scale_up_tr}`}>
            <div className= {styles.site__navbar_menu_container_links} onClick={() => setToggleMenu(false)}>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )}

export default Navbar
