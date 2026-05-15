import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

let popupShownThisLoad = false;

export default function DeprecationPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!popupShownThisLoad) {
      popupShownThisLoad = true;
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <h2>Warning</h2>
        <p>
          This content applies to V1 (inventor.gg) only and is not compatible
          with V2 (inventor.bot). Some links may be broken.
        </p>
        <button onClick={() => setIsVisible(false)}>Got it</button>
      </div>
    </div>
  );
}
