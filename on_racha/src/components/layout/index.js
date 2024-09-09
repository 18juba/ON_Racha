import React from "react"
import styles from "./layout-styles.module.css"

export default function LayoutComponent({children}){
    return(
        <>
            <div className={styles.FullPage}>
                {children}
            </div>
        </>
    )
}