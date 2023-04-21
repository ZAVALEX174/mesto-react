// import React from "react";
// import { useRef } from "react";

// function ImagePopup(props) {
//   const imageFallbackContainer = useRef(null);
//   const popupOpened = props.isOpen ? "popup_opened" : "";

//   function close(evt) {
//     if (evt.target.classList.contains("popup_opened")) {
//       props.onClose();
//     }
//     if (evt.target.classList.contains("popup__close")) {
//       props.onClose();
//     }
//   }

  // React.useEffect(() => {
  //   function handleEscClose(event) {
  //     if (event.keyCode === 27) {
  //       //переписать
  //       props.onClose();
  //     }
  //   }

    //монтирование (рождение)
    // document.addEventListener("keydown", handleEscClose);

    // return () => {
      //размонтирование (умирание)
  //     document.removeEventListener("keydown", handleEscClose);
  //   };
  // }, []);

  // return (
  //   <>
  //     <div
  //       className={`popup popup_image-card ${popupOpened}`}
  //       onMouseDown={close}
  //     >
  //       <div className="popup__container_big">
  //         <button
  //           className="popup__close popup__close_big"
  //           type="button"
  //         ></button>
  //         <figure className="popup__view" ref={imageFallbackContainer}>
  //           {props.card.link && (
  //             <img
  //               alt="#"
  //               className="popup-img_big"
  //               src={props.card.link}
  //               onLoad={(e) => {
  //                 imageFallbackContainer.current.style.width = `${e.target.offsetWidth}px`;
  //                 imageFallbackContainer.current.style.height = `${e.target.offsetHeight}px`;
  //               }}
//               />
//             )}
//           </figure>
//           <h2 className="popup-title">{props.card.name}</h2>
//         </div>
//       </div>
//     </>
//   );
// }
// export default ImagePopup;

//=================================================================================
import React from "react";

function ImagePopup() {
  return()
}

export default ImagePopup;

