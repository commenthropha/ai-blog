import React from 'react';
import styles from '../../styles/Blog.module.css';
import { PostCard } from '../../components';

export default function Blog({ posts }) {
    return (
        <div className={`${styles.ai__blog} ${styles.section__padding}`} id="recent">
            <div className={styles.ai__blog_heading}>
                <h1 className={styles.gradient__text}>A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className={styles.ai__blog_container}>
                {posts.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))}
            </div>
        </div>
    )
}
