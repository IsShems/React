import React, { useState } from "react";
import ProfileResult1 from "./ProfileResult1";
import ProfileResult2 from "./ProfileResult2";
import ProfileResult3 from "./ProfileResult3";
import ProfileResult4 from "./ProfileResult4";

function App() {
  const [name, setName] = useState("Karl");
  const [age, setAge] = useState("101");
  const [job, setJob] = useState("Artist");
  const [favoritebook, setFavoritebook] = useState("Alice in wonderland");
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [inputText1, setInputText1] = useState(""); 
  const [inputText2, setInputText2] = useState(""); 
  const [inputText3, setInputText3] = useState(""); 
  const [inputText4, setInputText4] = useState(""); 

  const updateName = () => { 
    setName(inputText1); 
    setIsActive1(false);
    //setInputText1("");
  };
  const updateAge = () => {
    setAge(inputText2); 
    setIsActive2(false);
    //setInputText2("");
  };
  const updateJob = () => {
    setJob(inputText3); 
    setIsActive3(false);
    //setInputText3("");
  };
  const updateFavoritebook = () => {
    setFavoritebook(inputText4); 
    setIsActive4(false);
    //setInputText4("");
  };

  return (
    <div>
      <h1>User Profile</h1>
      <ProfileResult1
        name={name}
        isActive1={isActive1}
        inputText1={inputText1} 
        setInputText1={setInputText1}
      />
      <button onClick={() => setIsActive1(!isActive1)}>
        {isActive1 ? "Back" : "Update"}
      </button>
      {isActive1 && (
        <button onClick={updateName}>Save</button>
      )}

      <ProfileResult2
        age={age}
        isActive2={isActive2}
        inputText2={inputText2} 
        setInputText2={setInputText2}
      />
      <button onClick={() => setIsActive2(!isActive2)}>
        {isActive2 ? "Back" : "Update"}
      </button>
      {isActive2 && (
        <button onClick={updateAge}>Save</button>
      )}

      <ProfileResult3
        job={job}
        isActive3={isActive3}
        inputText3={inputText3} 
        setInputText3={setInputText3}
      />
      <button onClick={() => setIsActive3(!isActive3)}>
        {isActive3 ? "Back" : "Update"}
      </button>
      {isActive3 && (
        <button onClick={updateJob}>Save</button>
      )}

      <ProfileResult4
        favoritebook={favoritebook}
        isActive4={isActive4}
        inputText4={inputText4} 
        setInputText4={setInputText4}
      />
      <button onClick={() => setIsActive4(!isActive4)}>
        {isActive4 ? "Back" : "Update"}
      </button>
      {isActive4 && (
        <button onClick={updateFavoritebook}>Save</button>
      )}
    </div>
  );
}

export default App;

