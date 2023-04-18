import React from "react";
import pen from "../images/pen.svg";

function Main() {
  return (
    <main>
      <section className="section profile container">
        <div className="profile__user">
          <div className="profile__avatar-wrapper">
            <img src="#" alt="Аватарка" className="profile__image" />{" "}
            <img className="profile__avatar-pen" src={pen} alt="Карандаш" />
          </div>
          <div className="profile__wrapper">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" className="profile__btn-editing"></button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button type="button" className="profile__btn"></button>
      </section>
      <section className="section elements container">
        <ul className="element"></ul>
      </section>
    </main>
  );
}

export default Main;
