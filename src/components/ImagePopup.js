import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_big ${card && "popup_opened"}`}>
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
