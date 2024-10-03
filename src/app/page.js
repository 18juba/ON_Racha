"use client";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";

import React, { useEffect, useState } from "react";
import LoadingSpinner from '@/components/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);

	useEffect(() => {
	  const timer = setTimeout(() => 3000);
	  return () => {
      clearTimeout(timer)
      window.location.href = "Login"
    };
	}, []);
  


  return (
    <main className={styles.main}>
      <LoadingSpinner /> 
    </main>
  );
}
