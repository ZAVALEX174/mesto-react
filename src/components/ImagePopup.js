import React from "react";
import { useEffect } from "react";

function ImagePopup({ card, onClose, onCloseEsc, onCloseOverlay }) {
  useEffect(() => {
    function handleEscClose(evt) {
      if (card) {
        onCloseEsc(evt);
      }
    }
    document.addEventListener("keydown", handleEscClose);
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
