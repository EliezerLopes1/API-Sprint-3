import styles from './PagUsuario.module.css'

export default function PaginacaoUser(){
    return(
    <div className={styles.paginacaoUser}>
      <button className={styles.botaoPaginacao01User}>◄</button>
      <button className={styles.botaoPaginacao02User}>►</button>
    </div>
    )
}