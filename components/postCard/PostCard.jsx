import React from 'react';
import Image from 'next/image'
import Preview from '../../public/photo.jpeg';
import {getRecentPosts} from '../../services';
import styles from '../../styles/Blog.module.css';

const PostCard = ({post}) => {
  return (
    <div className={styles.ai__blog_container_article}>
      <div className={styles.ai__blog_container_article_image}>
        <Image src={Preview}/>
      </div>
    <div className={styles.ai__blog_container_article_content}>
      <div>
        <p>Hello Hello</p>
        <h3>Hi</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
)}

export default PostCard