import React from "react"
import "./styles.css"

export default function LayoutComponent({children}){
    return(
        <>
            <div className="FullPage">
                {children}
            </div>
        </>
    )
}