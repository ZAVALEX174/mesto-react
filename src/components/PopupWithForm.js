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
  isLoading,
  submitBtnLoading,
}) {
  useEffect(() => {
    if (!isOpen) return; // если попап закрыт — выходим из функции

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
            {isLoading ? submitBtnLoading : buttonText}
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
