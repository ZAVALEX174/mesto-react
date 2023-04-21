// import React from "react";

// function PopupWithForm(props) {
//   const popupOpened = props.isOpen ? "popup_opened" : "";

//   function close(evt) {
//     if (evt.target.classList.contains("popup_opened")) {
//       props.onClose();
//     }
//     if (evt.target.classList.contains("popup__close")) {
//       props.onClose();
//     }
//   }

//   React.useEffect(() => {
//     function handleEscClose(event) {
//       if (event.keyCode === 27) {
//переписать
//     props.onClose();
//   }
// }
//монтирование (рождение)
//   document.addEventListener("keydown", handleEscClose);

//   return () => {
//     //размонтирование (умирание)
//     document.removeEventListener("keydown", handleEscClose);
//   };
// }, []);

// return (
//   <>
//     <div
//         className={`popup popup_${props.popup} ${popupOpened}`}
//         onMouseDown={close}
//       >
//         <div className="popup__container">
//           <button className="popup__close" type="button">
//             {" "}
//           </button>
//           <h2 className="popup__title">{props.title}</h2>
//           <form
//             className="popup__form"
//             name={props.name}
//             noValidate
//             onSubmit={props.onSubmit}
//           >
//             {props.children}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
// export default PopupWithForm;

//=====================================================================================

import React from "react";

function PopupWithForm(props) {
  return (
    <>
      <div
        className={`popup popup_${props.popup} ${popupOpened}`}
        onMouseDown={close}
      >
        <div className="popup__container">
          <button className="popup__close" type="button">
            {" "}
          </button>
          <h2 className="popup__title">{props.title}</h2>
          <form
            className="popup__form"
            name={props.name}
            noValidate
            onSubmit={props.onSubmit}
          >
            {props.children}
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
