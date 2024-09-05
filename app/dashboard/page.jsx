import React from "react";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Mains from "./anasayfa/page";
import KasaPage from "./kasa/page";
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}> </div>
        <Mains />
      </div>
      <div className={styles.side}></div>
    </div>
  );
};

export default Dashboard;
