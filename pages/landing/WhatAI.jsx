import React from 'react';
import {Feature} from '../../components';
import styles from '../../styles/WhatAI.module.css';

const WhatAI = () => {
    return (
      <div className={`${styles.whatai} ${styles.section__margin}`} id="whatai">
      <div className={styles.whatai_feature}>
        <Feature big="What is AI?" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className={styles.whatai_heading}>
        <h1 className={styles.gradient__text}>The possibilities are beyond your imagination</h1>
        <p>Explore the Blog</p>
      </div>
      <div className={styles.whatai_container}>
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )}
  
  export default WhatAI