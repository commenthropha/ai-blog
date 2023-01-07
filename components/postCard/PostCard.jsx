import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import styles from '../../styles/Blog.module.css';

import Image from 'next/image'
import { graphCMSImageLoader } from '../../util';

const PostCard = ({post}) => {
  console.log(post);
  
  return (
    <div className={styles.ai__blog_container_article}>
      <div className={styles.ai__blog_container_article_image}>
      <Image
          loader={graphCMSImageLoader}
          alt={post.title}
          src={post.featuredImage.url}
          height= '1'
          width= '1'
        />
      </div>
    <div className={styles.ai__blog_container_article_content}>
      <div>
        <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        <h3>{post.title}</h3>
      </div>
      <div>
        <Link href ={`/post/${post.slug}`}>
          <p>Read Full Article</p>
        </Link>
      </div>
    </div>
  </div>
)}

export default PostCard