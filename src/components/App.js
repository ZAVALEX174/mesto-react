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
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

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


  // useEffect(() => {
  //   Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([data, card]) => {
  //     setCurrentUser(data);
  //     setCards(card);
  //   }).catch((err) => {
  //     console.error(err);
  //   })
  // }, [])


  function handleEditAvatarClick() {
    // document.querySelector(".popup_avatar-form").classList.add("popup_opened");
    setEditAvatarPopupOpen(true);
  }

  function handleUpdateAvatar(data) {
    setLoading(true);
    api
      .setAvatar(data)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
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

  // Добавление карточек:
  function handleAddPlaceClick() {
    // document.querySelector(".popup_image").classList.add("popup_opened");
    setAddPlacePopupOpen(true);
  }

  function handleAddPlaceSubmit(data) {
    setLoading(true);
    api
      .addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
   
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка сервера ${err}`);
      });
  }, []);

  // Добавление лайков:
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

  // Функция удаления карточки:
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

  // Закрытие всез popup:
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  // Закрытие по кнопке Esc:
  function closePopupWithEsc(evt) {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  }

  // Закрытие по owerLay:
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

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onCloseEsc={closePopupWithEsc}
            onCloseOverlay={closePopupWithClickOnOwerlay}
            onAddPlace={handleAddPlaceSubmit}
            isLoading={isLoading}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onCloseEsc={closePopupWithEsc}
            onCloseOverlay={closePopupWithClickOnOwerlay}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading}
          />

          {/* Подтверждение удаления карточки: */}
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
