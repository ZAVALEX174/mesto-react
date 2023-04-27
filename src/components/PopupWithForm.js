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
  buttonText,
}) {
  useEffect(() => {
    function handleEscClose(evt) {
      if (isOpen) {
        onCloseEsc(evt);
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen]);

  return (
    <section
      className={`popup ${name} ${isOpen && `popup_opened`}`}
      onClick={onCloseOverlay}
    >
      <div className="popup__container">
        <h2 className="popup__text">{title}</h2>
        <form name={"form"} className="popup__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__button popup__save">
            {buttonText}
          </button>
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
