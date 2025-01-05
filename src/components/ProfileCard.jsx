import React from "react";
//import "./ProfileCard.css"; // Ensure styling is correct

const ProfileCard = ({ profile, skills }) => {
  // Debugging to ensure props are received correctly
  console.log("Profile:", profile);
  console.log("Skills:", skills);

  return (
    <div className="profile-card">
      <img
        src={profile.profilePicture || "https://via.placeholder.com/150"}
        alt="Profile"
        className="profile-picture"
      />
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <p>Email: {profile.email}</p>
        <p>Standard: {profile.standard}</p>
        <p>DOB: {profile.dob}</p>
        <p>Phone: {profile.phone}</p>
      </div>
      <div className="profile-skills">
        <h3>Skills:</h3>
        <ul>
          {Array.isArray(skills) && skills.length > 0  (
            skills.map((skill, index) => (
              <li key={skill.id || index}>
                {skill.name} ({skill.level}) - {skill.category}
              </li>
            ))
          ) }
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;


