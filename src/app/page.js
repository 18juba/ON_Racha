import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import Login from "@/components/Login/Index";
import React, { useEffect, useState } from "react";
import LoadingSpinner from '@/components/Loading';
import LoginForm from '@/components/Login/Index';

export default function Home() {
  const [loading, setLoading] = useState(true);

	useEffect(() => {
	  const timer = setTimeout(() => setLoading(false), 3000);
	  return () => {
      clearTimeout(timer)
    };
	}, []);
  


  return (
    <main className={styles.main}>
      {loading? <LoadingSpinner /> : <LoginForm />}
    </main>
  );
}
