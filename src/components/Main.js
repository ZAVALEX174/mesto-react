import React from "react";
import { useEffect } from "react";
import pen from "../images/pen.svg";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onConfirmCardDelete,
  onCardLike,
}) {
  //const [userName, setUserName] = React.useState();
  //const [userDescription, setUserDescription] = React.useState();
  //const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

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

  return (
    <>
      <main>
        <section className="section profile container">
          <div className="profile__user">
            <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
              <div
                className="profile__image"
                style={{ backgroundImage: `url(${currentUser.avatar})` }}
              ></div>
              <img className="profile__avatar-pen" src={pen} alt="Карандаш" />
            </div>
            <div className="profile__wrapper">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                type="button"
                className="profile__btn-editing"
                onClick={onEditProfile}
              />
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
          </div>
          <button type="button" className="profile__btn" onClick={onAddPlace} />
        </section>
        <section className="section elements container">
          <ul className="element">
            {cards.map((card) => (
              <Card
                card={card}
                key={card._id}
                onCardClick={onCardClick}
                onConfirmCardDelete={onConfirmCardDelete}
                onCardLike={onCardLike}
                likes = {card.likes.length}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
