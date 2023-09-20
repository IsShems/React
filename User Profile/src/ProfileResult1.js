import React from "react";

function ProfileResult1(props) {
  const handleInputChange = (e) => {
    props.setInputText1(e.target.value); // Обновляем inputText при изменении инпута
  };

  return (
    <div>
      {props.isActive1 ? (
        <input
          type="text"
          placeholder="Enter new name"
          value={props.inputText1} // Отображаем значение inputText
          onChange={handleInputChange}
        />
      ) : (
        <p>Name: {props.name}</p>
      )}
    </div>
  );
}

export default ProfileResult1;
