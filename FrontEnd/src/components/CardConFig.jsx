import styles from './CardConFig.module.css'

export default function CardConFig(){

    return(
        <div className={styles.box}>
            <div className={styles.stickers}>Birth Day</div>
            <div className={styles.stickers}></div>
            <div className={styles.stickers}></div>
            <div className={styles.stickers}></div>
            <div className={styles.stickers}></div>
            <div className={styles.stickers}></div>
        </div>
    )
}
