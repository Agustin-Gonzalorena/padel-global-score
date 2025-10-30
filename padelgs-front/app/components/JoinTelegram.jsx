import React, { useEffect, useState } from "react";

const TELEGRAM_LINK = "https://t.me/+S5o5kvc7sx0yYzVh";

const JoinTelegram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClose = () => {
    setIsVisible(false);
  };
  const handleAccept = () => {
    localStorage.setItem("joinedTelegram", "true");
    setIsVisible(false);
  };
  useEffect(() => {
    const joinedTelegram = localStorage.getItem("joinedTelegram");
    if (joinedTelegram !== "true") {
      setIsVisible(true);
    }
  }, []);
  return (
    <div
      className={`bg-white/80 p-2 w-full fixed left-0 bottom-0 z-40 flex gap-2 justify-center rounded-t-2xl ${
        isVisible ? "" : "hidden"
      }`}
    >
      <p className="text-black">
        Recibi <span className="font-bold">notificaciones </span>de nuevos
        encuentros y resultados.🔔🔔🔔
      </p>
      <button onClick={handleClose} className="bg-red-500 rounded-2xl p-3">
        Cerrar
      </button>
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-blue-500 rounded-2xl"
        onClick={handleAccept}
      >
        Aceptar
      </a>
    </div>
  );
};
export default JoinTelegram;
