import React from "react";
function Card({
  card,
  name,
  link,
  onCardClick
}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element__card">
      <img
        onClick={handleClick}
        src={link}
        alt={name}
        className="element__image"
      />
      <button type="button" className="element__delete"></button>
      <div className="element__content">
        <h2 className="element__title">{name}</h2>
        <div className="element__group">
          <button type="button" className="element__icon"></button>
          <span className="element__count-likes">0</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
