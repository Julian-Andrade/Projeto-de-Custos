import { useState, useEffect } from "react";
import styles from "./Message.module.css";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Não tem mensagem, retorna visible false
    if (!msg) {
      setVisible(false);
      return;
    }
    // Tem mensagem, retorna visible true
    setVisible(true);
    // Após um tempo de 3 segundos a mensagem será apagada
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    // Retorna o timer
    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
}

export default Message;
