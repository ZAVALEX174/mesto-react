// import React from "react";
// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer";
// import PopupWithForm from "./PopupWithForm";
// import ImagePopup from "./ImagePopup";

// function App() {
//   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
//     React.useState(false);
//   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
//     React.useState(false);
//   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
//   const [selectedCard, setSelectedCard] = React.useState({});

// React.useEffect(() => {
//   api
//     .getUserData()
//     .then((data) => {
//       setCurrentUser(data);
//     })
//     .catch((err) => {
//       console.log(`Ошибка сервера ${err}`);
//     });
// }, []);

// React.useEffect(() => {
//   //монтирование (рождение)
//   api
//     .getArrayCards()
//     .then((data) => {
//       setCards(data);
//     })
//     .catch((err) => {
//       console.log(`Ошибка сервера ${err}`);
//     });
// }, []);

// function handleEditAvatarClick() {
//   setIsEditAvatarPopupOpen(true);
//document.querySelector(".popup_avatar-form").classList.add("popup_opened");
// }

// function handleEditProfileClick() {
//   setIsEditProfilePopupOpen(true);
//document.querySelector(".profile-popup").classList.add("popup_opened");
// }

// function handleAddPlaceClick() {
//   setIsAddPlacePopupOpen(true);
//document.querySelector(".popup_image").classList.add("popup_opened");
// }

// закрытие попапов
// function closeAllPopups() {
//   setIsEditAvatarPopupOpen(false);
//   setIsEditProfilePopupOpen(false);
//   setIsAddPlacePopupOpen(false);
//   setSelectedCard({});
// }

// function handleCardClick(card) {
//   setSelectedCard(card);
//  }

//  function handleUpdateUser(data) {
//   api.editUserProfile(data)
//    .then((dataProfile) => {
//     setCurrentUser(dataProfile);
//     closeAllPopups();
//   })
//  }

//  function handleUpdateAvatar(data) {
//   api.editAvatar(data)
//    .then((dataAvatar) => {
//     setCurrentUser(dataAvatar);
//     closeAllPopups();
//    })
//  }

//  function handleAddPlaceSubmit(data) {
//   api.addNewCard(data)
//    .then((dataNewCard) => {
//     setCards([...cards, dataNewCard]);
//     closeAllPopups();
//  })
// }

// return (
//   <>
//     <div>
//       <div className="page">
//         <Header />
//         <Main
//           onEditProfile={handleEditProfileClick}
//           onAddPlace={handleAddPlaceClick}
//           onEditAvatar={handleEditAvatarClick}
//onCardClick={handleCardClick}
//cards={cards}
//handleEditProfileClick
//handleAddPlaceClick
// />
// <Footer />

// {/* <div className="popup profile-popup">
//   <div className="popup__container">
//     <h2 className="popup__text">Редактировать профиль</h2>
//     <form
//       action="#"
//       enctype="multipart/form-data"
//       name="form"
//       className="popup__form popup__action popup__action_profile"
//       novalidate
//     >
//       <input
//         id="input-name"
//         type="text"
//         placeholder="Имя"
//         name="name"
//         className="popup__input popup__input_text_user"
//         required
//         minlength="2"
//         maxlength="40"
//       />
//       <span
//         id="input-name-error"
//         className="popup__error popup__error_visible"
//       ></span>
//       <input
//         id="input-job"
//         type="text"
//         placeholder="О себе"
//         name="about"
//         className="popup__input popup__input_text_job"
//         required
//         minlength="2"
//         maxlength="200"
//       />
//       <span
//         id="input-job-error"
//         className="popup__error popup__error_visible"
//       ></span>
//       <button type="submit" className="popup__button popup__save">
//         Сохранить
//       </button>
//     </form>
//     <button type="button" className="popup__close"></button>
//   </div>
// </div>

// <div className="popup popup_image">
//   <div className="popup__container popup__container-image">
//     <h2 className="popup__text">Новое место</h2>
//     <form
//       action="#"
//       enctype="multipart/form-data"
//       name="form"
//       className="popup__form popup__action popup__action_image"
//       novalidate
//     >
//       <input
//         id="input-title"
//         type="text"
//         placeholder="Название"
//         name="name"
//         className="popup__input popup__input_text_image-name"
//         required
//         minlength="2"
//         maxlength="30"
//       />
//       <span
//         id="input-title-error"
//         className="popup__error popup__error_visible"
//       ></span>
//       <input
//         id="input-link"
//         type="url"
//         placeholder="Ссылка на картинку"
//         name="link"
//         className="popup__input popup__input_text_image-link"
//         required
//       />
//       <span
//         id="input-link-error"
//         className="popup__error popup__error_visible"
//       ></span>
//       <button
//         type="submit"
//         className="popup__button popup__save popup__save_image"
//       >
//         Создать
//       </button>
//     </form>
//     <button
//       type="button"
//       className="popup__close popup__close_image"
//     ></button>
//   </div>
// </div>

// {/* <!--аватар--> */}
//  {/* <div className="popup popup_avatar-form">
//   <div className="popup__container">
//     <h2 className="popup__text">Обновить аватар</h2>
//     <form className="popup__form" name="edit-form-avatar" novalidate>
//       <input
//         className="popup__input popup__info popup__info_avatar"
//         id="link-avatar"
//         name="avatar"
//         placeholder="Ссылка на картинку"
//         required
//         type="url"
//         value=""
//       />
//       <span
//         className="popup__error popup__error_visible"
//         id="link-avatar-error"
//       ></span>
//       <button className="popup__button popup__save" type="submit">
//         Сохранить
//       </button>
//     </form>
//     <button
//       className="popup__close popup__close-new-card"
//       type="button"
//     ></button>
//   </div>
// </div> */}

// {/* <!--удалить карточку--> */}
//  {/* <div className="popup popup_confirm">
//   <div className="popup__container">
//     <button className="popup__close" type="button"></button>
//     <h2 className="popup__text">Вы уверены?</h2>
//     <form className="popup__form" novalidate>
//       <button
//         className="popup__button popup__save"
//         type="submit"
//         value="Да"
//       >
//         Да
//       </button>
//     </form>
//   </div>
// </div>  */}

// {/* <div className="popup popup_big">
//   <div className="popup__container popup__container_big">
//     <img className="popup-img popup-img_big" src="#" alt="#" />
//     <h2 className="popup-title"> </h2>
//     <button
//       type="button"
//       className="popup__close popup__close_big"
//     ></button>
//   </div>
// </div> */}

// {/* <template
//   id="element__card-template"
//   className="element__card-template"
// >
//   <li className="element__card">
//     <img src="#" alt="#" className="element__image" />
//     <button type="button" className="element__delete"></button>
//     <div className="element__content">
//       <h2 className="element__title"> </h2>
//       <div className="element__group">
//         <button type="button" className="element__icon"></button>
//         <span className="element__count-likes">0</span>
//       </div>
//     </div>
//   </li>
// </template> */}

//           <PopupWithForm
//             title="Новое место"
//             name="form"
//             popup="popup popup_image"
//             isOpen={isOpen}
//             onClose={onClose}
//             onSubmit={handleSubmit}
//           >
//             <input
//               value={name}
//               className="popup__input popup__input_text_image-name"
//               id="input-title"
//               maxLength="30"
//               minLength="2"
//               name="name"
//               placeholder="Название"
//               required
//               type="text"
//               onChange={handleNameChange}
//             />
//             <span
//               className="popup__error popup__error_visible"
//               id="input-title-error"
//             >
//               {" "}
//             </span>
//             <input
//               value={link}
//               className="popup__input popup__input_text_image-link"
//               id="input-link"
//               name="link"
//               placeholder="Ссылка на картинку"
//               required
//               type="url"
//               onChange={handleLinkChange}
//             />
//             <span
//               className="ppopup__error popup__error_visible"
//               id="input-link-error"
//             >
//               {" "}
//             </span>
//             <button
//               className="popup__button popup__save popup__save_image"
//               type="submit"
//             >
//               Создать
//             </button>
//           </PopupWithForm>
//         </div>
//       </div>

//       <EditProfilePopup
//         isOpen={isEditProfilePopupOpen}
//         onClose={closeAllPopups}
//         onUpdateUser={handleUpdateUser}
//       />
//       <EditAvatarPopup
//         isOpen={isEditAvatarPopupOpen}
//         onClose={closeAllPopups}
//         onUpdateAvatar={handleUpdateAvatar}
//       />
//       <AddPlacePopup
//         isOpen={isAddPlacePopupOpen}
//         onClose={closeAllPopups}
//         onAddPlace={handleAddPlaceSubmit}
//       />
//     </>
//   );
// }

// export default App;
//===============================================================================

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    // document.querySelector(".popup_avatar-form").classList.add("popup_opened");
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    // document.querySelector(".profile-popup").classList.add("popup_opened");
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    // document.querySelector(".popup_image").classList.add("popup_opened");
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }
  //пока оставить
  function closePopupWithClickOnOwerlay(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closeAllPopups();
    }
  }
  //пока оставить
  function closePopupWithEsc(evt) {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        title="Редактировать профиль"
        name="form"
        popup="profile-popup"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onCloseEsc={closePopupWithEsc}
        onCloseOverlay={closePopupWithClickOnOwerlay}
      >
        <input
          id="input-name"
          type="text"
          placeholder="Имя"
          name="name"
          className="popup__input popup__input_text_user"
          required=""
          minLength={2}
          maxLength={40}
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
          required=""
          minLength={2}
          maxLength={200}
        />
        <span
          id="input-job-error"
          className="popup__error popup__error_visible"
        />
        <button type="submit" className="popup__button popup__save">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="form"
        popup="image"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onCloseEsc={closePopupWithEsc}
        onCloseOverlay={closePopupWithClickOnOwerlay}
      >
        <input
          id="input-title"
          type="text"
          placeholder="Название"
          name="name"
          className="popup__input popup__input_text_image-name"
          required=""
          minLength={2}
          maxLength={30}
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
        />
        <span
          id="input-link-error"
          className="popup__error popup__error_visible"
        />
        <button
          type="submit"
          className="popup__button popup__save popup__save_image"
        >
          Создать
        </button>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="edit-form-avatar"
        popup="popup_avatar-form"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onCloseEsc={closePopupWithEsc}
        onCloseOverlay={closePopupWithClickOnOwerlay}
      >
        <input
          className="popup__input popup__info popup__info_avatar"
          id="link-avatar"
          name="avatar"
          placeholder="Ссылка на картинку"
          required=""
          type="url"
          defaultValue=""
        />
        <span
          className="popup__error popup__error_visible"
          id="link-avatar-error"
        />
        <button className="popup__button popup__save" type="submit">
          Сохранить
        </button>
      </PopupWithForm>

      {/* удалить карточку */}
      <PopupWithForm
        title="Вы уверены?"
        name=""
        popup="confirm"
        onClose={closeAllPopups}
      >
        <button className="popup__button popup__save" type="submit" value="Да">
          Да
        </button>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        onCloseEsc={closePopupWithEsc}
        onCloseOverlay={closePopupWithClickOnOwerlay}
      />

      {/* удалить карточку */}
      {/* <div className="popup popup_confirm">
        <div className="popup__container">
          <button className="popup__close" type="button" />
          <h2 className="popup__text">Вы уверены?</h2>
          <form className="popup__form" noValidate="">
            <button
              className="popup__button popup__save"
              type="submit"
              value="Да"
            >
              Да
            </button>
          </form>
        </div>
      </div> */}
      {/* <div className="popup popup_big">
        <div className="popup__container popup__container_big">
          <img className="popup-img popup-img_big" src="#" alt="#" />
          <h2 className="popup-title"> </h2>
          <button type="button" className="popup__close popup__close_big" />
        </div>
      </div> */}
      {/* <template
        id="element__card-template"
        className="element__card-template"
      /> */}
    </div>
  );
}

export default App;
