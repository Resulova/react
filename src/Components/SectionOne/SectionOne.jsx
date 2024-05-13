import React from "react";
import styles from "../SectionOne/SectionOne.module.css";
const SectionOne = () => {
  return (
    <div className={styles.sectionOne}>
      <div className={styles.text}>
        <h4>Women Collection 2018</h4>
        <h2>NEW SEASON</h2>
      </div>
      <div className={styles.Buttuns}>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default SectionOne;
