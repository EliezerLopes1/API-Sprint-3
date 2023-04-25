import React from 'react'
import styles from './PagAdmin.module.css'

export default function Paginacao(){
    return(
    <div className={styles.paginacao}>
      <button className={styles.botaoPaginacao01}>◄</button>
      <button className={styles.botaoPaginacao02}>►</button>
    </div>
    )
}