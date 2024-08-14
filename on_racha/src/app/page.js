import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import Login from "@/components/Login/Index";
import React from "react";

export default function Home() {

  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
