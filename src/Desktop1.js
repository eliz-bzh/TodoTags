import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Desktop1.module.css";

export const Desktop1 = () => {
  const navigate = useNavigate();

  const onChangeButtonClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className={styles.desktop3Container}>
      <img className={styles.ellipse3img} alt="" src="/ellipse-31.svg" />
      <img className={styles.ellipse4img} alt="" src="/ellipse-21.svg" />
      <img className={styles.vector5img} alt="" src="/vector4.svg" />
      <form className={styles.loginForm} tabIndex={1}>
        <div className={styles.frame3} />
        <form className={styles.frame2Container}>
          <button className={styles.buttonGoimg} autoFocus>
            <div className={styles.button2} />
            <div className={styles.go}>go</div>
          </button>
          <img className={styles.password2img} alt="" src="/password1.svg" />
          <img className={styles.username2img} alt="" src="/username1.svg" />
          <div className={styles.loginText}>Login</div>
          <img
            className={styles.rectangle2img}
            alt=""
            src="/rectangle-11@2x.png"
          />
        </form>
        <button
          className={styles.changeButtimgContainer}
          autoFocus
          onClick={onChangeButtonClick}
        >
          <img className={styles.ellipse5img} alt="" src="/ellipse-1.svg" />
          <img className={styles.plusimg} alt="" src="/plus.svg" />
          <img className={styles.plus2img} alt="" src="/plus1@2x.png" />
          <div className={styles.buttonGo}>
            <div className={styles.button3} />
            <div className={styles.goText}>go</div>
          </div>
        </button>
      </form>
    </div>
  );
};
