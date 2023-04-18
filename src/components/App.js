import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  function handleEditAvatarClick() {
    //setIsEditAvatarPopupOpen(true);
    document.querySelector(".popup_avatar-form").classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    //setIsEditProfilePopupOpen(true);
    document.querySelector(".profile-popup").classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    //setIsAddPlacePopupOpen(true);
    document.querySelector(".popup_image").classList.add("popup_opened");
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onClick={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          //handleEditProfileClick
          //handleAddPlaceClick
        />
        <Footer />

        <div className="popup profile-popup">
          <div className="popup__container">
            <h2 className="popup__text">Редактировать профиль</h2>
            <form
              action="#"
              enctype="multipart/form-data"
              name="form"
              className="popup__form popup__action popup__action_profile"
              novalidate
            >
              <input
                id="input-name"
                type="text"
                placeholder="Имя"
                name="name"
                className="popup__input popup__input_text_user"
                required
                minlength="2"
                maxlength="40"
              />
              <span
                id="input-name-error"
                className="popup__error popup__error_visible"
              ></span>
              <input
                id="input-job"
                type="text"
                placeholder="О себе"
                name="about"
                className="popup__input popup__input_text_job"
                required
                minlength="2"
                maxlength="200"
              />
              <span
                id="input-job-error"
                className="popup__error popup__error_visible"
              ></span>
              <button type="submit" className="popup__button popup__save">
                Сохранить
              </button>
            </form>
            <button type="button" className="popup__close"></button>
          </div>
        </div>

        <div className="popup popup_image">
          <div className="popup__container popup__container-image">
            <h2 className="popup__text">Новое место</h2>
            <form
              action="#"
              enctype="multipart/form-data"
              name="form"
              className="popup__form popup__action popup__action_image"
              novalidate
            >
              <input
                id="input-title"
                type="text"
                placeholder="Название"
                name="name"
                className="popup__input popup__input_text_image-name"
                required
                minlength="2"
                maxlength="30"
              />
              <span
                id="input-title-error"
                className="popup__error popup__error_visible"
              ></span>
              <input
                id="input-link"
                type="url"
                placeholder="Ссылка на картинку"
                name="link"
                className="popup__input popup__input_text_image-link"
                required
              />
              <span
                id="input-link-error"
                className="popup__error popup__error_visible"
              ></span>
              <button
                type="submit"
                className="popup__button popup__save popup__save_image"
              >
                Создать
              </button>
            </form>
            <button
              type="button"
              className="popup__close popup__close_image"
            ></button>
          </div>
        </div>

        {/* <!--аватар--> */}
        <div className="popup popup_avatar-form">
          <div className="popup__container">
            <h2 className="popup__text">Обновить аватар</h2>
            <form className="popup__form" name="edit-form-avatar" novalidate>
              <input
                className="popup__input popup__info popup__info_avatar"
                id="link-avatar"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
                type="url"
                value=""
              />
              <span
                className="popup__error popup__error_visible"
                id="link-avatar-error"
              ></span>
              <button className="popup__button popup__save" type="submit">
                Сохранить
              </button>
            </form>
            <button
              className="popup__close popup__close-new-card"
              type="button"
            ></button>
          </div>
        </div>

        {/* <!--удалить карточку--> */}
        <div className="popup popup_confirm">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__text">Вы уверены?</h2>
            <form className="popup__form" novalidate>
              <button
                className="popup__button popup__save"
                type="submit"
                value="Да"
              >
                Да
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_big">
          <div className="popup__container popup__container_big">
            <img className="popup-img popup-img_big" src="#" alt="#" />
            <h2 className="popup-title"> </h2>
            <button
              type="button"
              className="popup__close popup__close_big"
            ></button>
          </div>
        </div>

        <template
          id="element__card-template"
          className="element__card-template"
        >
          <li className="element__card">
            <img src="#" alt="#" className="element__image" />
            <button type="button" className="element__delete"></button>
            <div className="element__content">
              <h2 className="element__title"> </h2>
              <div className="element__group">
                <button type="button" className="element__icon"></button>
                <span className="element__count-likes">0</span>
              </div>
            </div>
          </li>
        </template>
      </div>
    </div>
  );
}

export default App;
