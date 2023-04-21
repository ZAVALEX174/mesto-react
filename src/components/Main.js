// import React from "react";
// import pen from "../images/pen.svg";
// import Card from "./Card.js";

// function Main(props) {
//   return (
//     <main className="content">
//       <section className="section profile container">
//         <div className="profile__user">
//           <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
//             <img src="#" alt="Аватарка" className="profile__image" />
//             <img className="profile__avatar-pen" src={pen} alt="Карандаш" />
//           </div>
//           <div className="profile__wrapper">
//             <h1 className="profile__title">Жак-Ив Кусто</h1>
//             <button
//       type="button"
//       className="profile__btn-editing"
//       onClick={props.onEditProfile}
//     ></button>
//     <p className="profile__subtitle">Исследователь океана</p>
//   </div>
// </div>
// <button
//   type="button"
//   className="profile__btn"
//     onClick={props.onAddPlace}
//   ></button>
// </section>
// <section className="section elements container">
//   <ul className="element">
//     {props.cards.map((card) => (
//       <Card
//         key={card._id}
//         card={card}
//         onCardClick={props.onCardClick}
//onCardLike={props.onCardLike} //пока удалить
//               onCardDelete={props.onCardDelete}
//             />
//           ))}
//         </ul>
//       </section>
//     </main>
//   );
// }

// export default Main;

//===============================================================================

import React from "react";
import pen from "../images/pen.svg";

function Main(props) {
  return (
    <>
      <main>
        <section className="section profile container">
          <div className="profile__user">
            <div
              className="profile__avatar-wrapper"
              onClick={props.onEditAvatar}
            >
              <img src="#" alt="Аватарка" className="profile__image" />{" "}
              <img className="profile__avatar-pen" src={pen} alt="Карандаш" />
            </div>
            <div className="profile__wrapper">
              <h1 className="profile__title"> </h1>
              <button
                type="button"
                className="profile__btn-editing"
                onClick={props.onEditProfile}
              />
              <p className="profile__subtitle" />
            </div>
          </div>
          <button
            type="button"
            className="profile__btn"
            onClick={props.onAddPlace}
          />
        </section>
        <section className="section elements container">
          <ul className="element" />
        </section>
      </main>

      <div className="popup profile-popup">
        <div className="popup__container">
          <h2 className="popup__text">Редактировать профиль</h2>
          <form
            action="#"
            encType="multipart/form-data"
            name="form"
            className="popup__form popup__action popup__action_profile"
            noValidate=""
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
          </form>
          <button type="button" className="popup__close" />
        </div>
      </div>
      <div className="popup popup_image">
        <div className="popup__container popup__container-image">
          <h2 className="popup__text">Новое место</h2>
          <form
            action="#"
            encType="multipart/form-data"
            name="form"
            className="popup__form popup__action popup__action_image"
            noValidate=""
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
          </form>
          <button type="button" className="popup__close popup__close_image" />
        </div>
      </div>
      {/*аватар*/}
      <div className="popup popup_avatar-form">
        <div className="popup__container">
          <h2 className="popup__text">Обновить аватар</h2>
          <form className="popup__form" name="edit-form-avatar" noValidate="">
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
          </form>
          <button
            className="popup__close popup__close-new-card"
            type="button"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
