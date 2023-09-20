import React from "react";

function ProfileResult2(props) {
  const handleInputChange = (e) => {
    props.setInputText2(e.target.value); // Обновляем inputText при изменении инпута
  };

  return (
    <div>
      {props.isActive2 ? (
        <input
          type="text"
          placeholder="Enter new age"
          value={props.inputText2} // Отображаем значение inputText
          onChange={handleInputChange}
        />
      ) : (
        <p>Age: {props.age}</p>
      )}
    </div>
  );
}

export default ProfileResult2;
