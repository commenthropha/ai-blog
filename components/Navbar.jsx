import React, {useState,useEffect} from 'react';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import { graphCMSImageLoader } from '../util';
import styles from '../styles/Navbar.module.css'
import next from 'next';

const Menu = () => (
  <>
  <Link href = '/'><p>Home</p></Link>
  <p>About Us</p>
  <Link href = '/blog/blog'><p id = {styles.blog_link}>Blog</p></Link>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className = {styles.site__navbar}>
      <div className= {styles.site__navbar_links}>
        <div className= {styles.site__navbar_links_logo}>
          <Image
            loader={graphCMSImageLoader}
            alt= 'Site logo'
            src= 'next.png'
            height= '1'
            width= '1'
          />
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
