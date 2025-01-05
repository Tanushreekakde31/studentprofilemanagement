import React, { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import SkillManager from "./components/SkillManager";
import ProfileCard from "./components/ProfileCard";
import "./styles.css";

const App = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    standard: "",
    dob: "",
    phone: "",
    profilePicture: "",
  });
  const [skills, setSkills] = useState([]);

  return (
    <div className="app">
      <ProfileForm profile={profile} setProfile={setProfile} />
      <SkillManager skills={skills} setSkills={setSkills} />
      <ProfileCard profile={profile} setskills={skills} />
    </div>
  );
};

export default App;

