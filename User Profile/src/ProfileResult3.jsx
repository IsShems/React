import React from "react";

function ProfileResult3(props) {
  const handleInputChange = (e) => {
    props.setInputText3(e.target.value); // Обновляем inputText при изменении инпута
  };

  return (
    <div>
      {props.isActive3 ? (
        <input
          type="text"
          placeholder="Enter new job"
          value={props.inputText3} // Отображаем значение inputText
          onChange={handleInputChange}
        />
      ) : (
        <p>Job: {props.job}</p>
      )}
    </div>
  );
}

export default ProfileResult3;
