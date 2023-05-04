import React from "react";
import { useEffect } from "react";

function ImagePopup({ card, onClose, isOpen, onCloseOverlay }) {
  // useEffect(() => {
  //   function handleEscClose(evt) {
  //     if (card) {
  //       onClose(evt);
  //     }
  //   }
  //   document.addEventListener("keydown", handleEscClose);
  //   return () => {
  //     document.removeEventListener("keydown", handleEscClose);
  //   };
  // }, [card]);
  useEffect(() => {
    if (!card) return; // если попап закрыт — выходим из функции

    // если попап открыт — объявляем функцию закрытия и устанавливаем слушатель
    function handleEscClose(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    // при изменении isOpen предварительно удаляем слушатель
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [card]);

  useEffect(() => {
    function handleOverlayClose(evt) {
      if (card) {
        onCloseOverlay(evt);
      }
    }
    document.addEventListener("mousedown", handleOverlayClose);
    return () => {
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  }, [card]);

  return (
    <div className={`popup popup_big ${card && `popup_opened`}`}>
      <div className="popup__container popup__container_big">
        <button
          onClick={onClose}
          className="popup__close popup__close_big"
          type="button"
        ></button>
        <img
          src={card && card.link}
          alt={card && card.name}
          className="popup-img popup-img_big"
        />
        <h2 className="popup-title">{card && card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
