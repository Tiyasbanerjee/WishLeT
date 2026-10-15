import styles from './Letter.module.css'

import BirthDay_Letter from './BirthDay/Letter_Style'


export default function Letter(){

    return (
        <>
        
        <div className={styles.container}>
            
           <BirthDay_Letter/>

            <div className={styles.address}>

            </div>

        </div>

        </>
    )
}