import React from 'react';
import styles from '../styles/WhatAI.module.css'

const Feature = ({ title, big, text }) => {

  return(
  <div className= {styles.ai__features_container__feature}>
    <div className= {styles.ai__features_container__feature_title}>
      <div />
      <h1>{title}</h1>
      <h2>{big}</h2>
    </div>
    <div className={styles.ai__features_container_feature_text}>
      <p>{text}</p>
    </div>
  </div>
)};

export default Feature;