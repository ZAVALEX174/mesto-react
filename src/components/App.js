import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useEffect } from "react";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [isLoading, setLoading] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Ошибка сервера ${err}`);
      });
  }, []);

  function handleEditAvatarClick() {
    // document.querySelector(".popup_avatar-form").classList.add("popup_opened");
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    // document.querySelector(".profile-popup").classList.add("popup_opened");
    setEditProfilePopupOpen(true);
  }

  function handleUpdateUser(data) {
    setLoading(true);
    api
      .setUserProfile(data)
      .then((newUser) => {
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleAddPlaceClick() {
    // document.querySelector(".popup_image").classList.add("popup_opened");
    setAddPlacePopupOpen(true);
  }

  useEffect(() => {
    // api
    //   .getUserInfo()
    //   .then((data) => {
    //     setUserName(data.name);
    //     setUserDescription(data.about);
    //     setUserAvatar(data.avatar);
    //   })
    //   .catch((err) => {
    //     console.log(`Ошибка сервера ${err}`);
    //   });
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка сервера ${err}`);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки

    if (!isLiked) {
      api
        .likeCard(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      api
        .removeLikeCard(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  //------------------------------------------
  //здесь функция удаления карточки:
  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((items) => items.filter((c) => c._id !== card._id && c));
      })
      .catch((err) => {
        console.error(err);
      });
  }
  //------------------------------------------

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function closePopupWithEsc(evt) {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  }

  function closePopupWithClickOnOwerlay(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closeAllPopups();
    }
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}
            cards={cards}
            onCardDelete={handleCardDelete}
          />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onCloseEsc={closePopupWithEsc}
            onCloseOverlay={closePopupWithClickOnOwerlay}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          />

          <PopupWithForm
            title="Новое место"
            name="image-card"
            popup="image"
            buttonText="Создать"
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
            {/* <button
            type="submit"
            className="popup__button popup__save popup__save_image"
          >
            Создать
          </button> */}
          </PopupWithForm>

          <PopupWithForm
            title="Обновить аватар"
            name="edit-form-avatar"
            popup="popup_avatar-form"
            buttonText="Сохранить"
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
            {/* <button className="popup__button popup__save" type="submit">
            Сохранить
          </button> */}
          </PopupWithForm>

          {/* удалить карточку */}
          <PopupWithForm
            title="Вы уверены?"
            name=""
            popup="confirm"
            buttonText="Да"
            onClose={closeAllPopups}
          >
            {/* <button
            className="popup__button popup__save"
            type="submit"
            value="Да"
          >
            Да
          </button> */}
          </PopupWithForm>

          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            onCloseEsc={closePopupWithEsc}
            onCloseOverlay={closePopupWithClickOnOwerlay}
          />
        </div>
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
