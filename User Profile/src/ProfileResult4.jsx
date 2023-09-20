import React from "react";

function ProfileResult4(props) {
  const handleInputChange = (e) => {
    props.setInputText4(e.target.value); // Обновляем inputText при изменении инпута
  };

  return (
    <div>
      {props.isActive4 ? (
        <input
          type="text"
          placeholder="Enter new favorite book"
          value={props.inputText4} // Отображаем значение inputText
          onChange={handleInputChange}
        />
      ) : (
        <p>Favorite book: {props.favoritebook}</p>
      )}
    </div>
  );
}

export default ProfileResult4;
