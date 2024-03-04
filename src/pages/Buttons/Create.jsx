import React from 'react'
import styles from './create.module.css';

const Create = (prop) => {
  
  return (
    <button className={styles.createButton} onClick={prop.event}>CREATE</button>  )
}

export default Create