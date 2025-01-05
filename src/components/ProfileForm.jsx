import React, { useState } from "react";
//import "./ProfileForm.css";

const ProfileForm = ({ profile, setProfile }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, profilePicture: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-form">
      <h2>Student Profile Details</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Standard:</label>
          <input
            type="text"
            name="standard"
            value={profile.standard}
            onChange={handleChange}
            placeholder="Enter your standard"
          />
        </div>
        <div className="form-group">
          <label>DOB:</label>
          <input
            type="date"
            name="dob"
            value={profile.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label>Profile Picture:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;

