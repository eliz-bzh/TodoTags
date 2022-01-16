import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Desktop2.module.css";

export const Desktop2 = () => {
  const navigate = useNavigate();

  const onButtonNextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onXClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <div className={styles.desktop2Container}>
      <img className={styles.ellipseimg} alt="" src="/ellipse-3.svg" />
      <img className={styles.ellipse2img} alt="" src="/ellipse-2.svg" />
      <img className={styles.vector3img} alt="" src="/vector2.svg" />
      <form className={styles.registerFo}>
        <div className={styles.frame} />
        <div className={styles.frame2} />
        <form className={styles.frameContainer}>
          <button
            className={styles.buttonNextimg}
            autoFocus
            onClick={onButtonNextClick}
          >
            <Container className={styles.button} />
            <div className={styles.next}>next</div>
          </button>
          <img className={styles.passwordimg} alt="" src="/password.svg" />
          <img className={styles.usernameimg} alt="" src="/username.svg" />
          <div className={styles.login}>Register</div>
          <img className={styles.rectangleimg} alt="" src="/rectangle-1.svg" />
        </form>
        <button className={styles.ximg} autoFocus onClick={onXClick}>
          <img className={styles.vector4img} alt="" src="/vector3.svg" />
        </button>
      </form>
    </div>
  );
};
