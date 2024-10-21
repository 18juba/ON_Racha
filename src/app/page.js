"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";

import React, { useEffect, useState } from "react";
import LoadingSpinner from '@/components/Loading';

export default function Home() {

  useEffect(() => {
    const timer = setTimeout(() => (null), 100);
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
