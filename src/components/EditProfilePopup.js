import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({
  isOpen,
  onClose,
  onCloseEsc,
  onCloseOverlay,
  onUpdateUser,
  isLoading,
}) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      popup="profile-popup"
      buttonText="Сохранить"
      submitBtnLoading="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onCloseEsc={onCloseEsc}
      onCloseOverlay={onCloseOverlay}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      children={
        <>
          <input
            id="input-name"
            type="text"
            placeholder="Имя"
            name="name"
            className="popup__input popup__input_text_user"
            required={true}
            minLength={2}
            maxLength={40}
            onChange={handleNameChange}
            value={name}
          />
          <span
            id="input-name-error"
            className="popup__error popup__error_visible"
          />
          <input
            id="input-job"
            type="text"
            placeholder="О себе"
            name="about"
            className="popup__input popup__input_text_job"
            required={true}
            minLength={2}
            maxLength={200}
            value={description}
            onChange={handleDescriptionChange}
          />
          <span
            id="input-job-error"
            className="popup__error popup__error_visible"
          />
         
        </>
      }
    />
  );
}

export default EditProfilePopup;
