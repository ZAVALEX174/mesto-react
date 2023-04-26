import React from "react";
import { useEffect } from "react";

function PopupWithForm({
  isOpen,
  onClose,
  onCloseEsc,
  onCloseOverlay,
  onSubmit,
  name,
  title,
  children,
}) {
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", onCloseEsc);
    } else {
      document.removeEventListener("keydown", onCloseEsc);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", onCloseOverlay);
    } else {
      document.removeEventListener("mousedown", onCloseOverlay);
    }
  }, [isOpen]);

  return (
    <section className={`popup ${name} ${isOpen && `popup_opened`}`}>
      <div className="popup__container">
        <h2 className="popup__text">{title}</h2>
        <form name={"form"} className="popup__form" onSubmit={onSubmit}>
          {children}
        </form>
        <button
          onClick={onClose}
          className="popup__close"
          type="button"
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
