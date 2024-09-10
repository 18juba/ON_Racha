"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import Login from "@/components/Login/Index";
import React, { useEffect, useState } from "react";
import LoadingSpinner from '@/components/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);

	useEffect(() => {
	  // Simula uma operação de carregamento (API, etc.)
	  const timer = setTimeout(() => setLoading(false), 3000);
	  return () => clearTimeout(timer);
	}, []);
  


  return (
    <main className={styles.main}>
      {loading? <LoadingSpinner /> : <Login />}
    </main>
  );
}
