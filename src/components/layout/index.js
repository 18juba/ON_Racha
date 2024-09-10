import React, { useEffect, useState } from "react"
import styles from "./layout-styles.module.css"
import LoadingSpinner from "../Loading";

export default function LayoutComponent({children}){
    const [loading, setLoading] = useState(true);

	useEffect(() => {
	  // Simula uma operação de carregamento (API, etc.)
	  const timer = setTimeout(() => setLoading(false), 3000);
	  return () => clearTimeout(timer);
	}, []);

    return(
        <>
            <div className={styles.FullPage}>
            {loading? <LoadingSpinner /> : children}
            </div>
        </>
    )
}