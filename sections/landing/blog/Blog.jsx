import React from 'react';
import { getRecentPosts } from '../../../services';
import styles from '../../../styles/Blog.module.css';
import { PostCard } from '../../../components/';

export async function getStaticProps() {
    const posts = [
        { title: 'Hello', id: '1' },
        { title: 'Yellow', id: '2' }
    ]

    return {
        props: { posts }
    }
}


export default function Blog({ posts }) {
    return (
        <div className={`${styles.ai__blog} ${styles.section__padding}`} id="blog">
            <div className={styles.ai__blog_heading}>
                <h1 className={styles.gradient__text}>A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className={styles.ai__blog_container}>
                {posts.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </div>
        </div>
    )
}

/*
export async function getStaticProps() {
    const posts = (await getRecentPosts()) || [];
    return {
        props: { posts }
    }
}
*/
