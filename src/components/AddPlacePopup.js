import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
  isOpen,
  onClose,
  onCloseEsc,
  onCloseOverlay,
  onAddPlace,
  isLoading,
}) {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    if (isOpen) {
      setTitle("");
      setLink("");
    }
  }, [isOpen]);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: title,
      link: link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="image-card"
      popup="image"
      buttonText="Создать"
      submitBtnLoading="Добавление..."
      isOpen={isOpen}
      onClose={onClose}
      onCloseEsc={onCloseEsc}
      onCloseOverlay={onCloseOverlay}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      children={
        <>
          <input
            id="input-title"
            type="text"
            placeholder="Название"
            name="name"
            className="popup__input popup__input_text_image-name"
            required=""
            minLength={2}
            maxLength={30}
            value={title}
            onChange={handleTitleChange}
          />
          <span
            id="input-title-error"
            className="popup__error popup__error_visible"
          />
          <input
            id="input-link"
            type="url"
            placeholder="Ссылка на картинку"
            name="link"
            className="popup__input popup__input_text_image-link"
            required=""
            value={link}
            onChange={handleLinkChange}
          />
          <span
            id="input-link-error"
            className="popup__error popup__error_visible"
          />
          
        </>
      }
    />
  );
}
export default AddPlacePopup;
