import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  isOpen,
  onClose,
  onCloseEsc,
  onCloseOverlay,
  onUpdateAvatar,
  isLoading,
}) {
  const ref = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: ref.current.value,
    });
  }

  React.useEffect(() => {
    ref.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-form-avatar"
      popup="popup_avatar-form"
      buttonText="Обновить"
      isOpen={isOpen}
      onClose={onClose}
      onCloseEsc={onCloseEsc}
      onCloseOverlay={onCloseOverlay}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      submitBtnLoading="Обновление..."
      children={
        <>
          <input
            className="popup__input popup__info popup__info_avatar"
            id="link-avatar"
            name="avatar"
            placeholder="Ссылка на картинку"
            required={true}
            type="url"
            defaultValue=""
            ref={ref}
          />
          <span
            className="popup__error popup__error_visible"
            id="link-avatar-error"
          />
        </>
      }
    />
  );
}

export default EditAvatarPopup;
