import React, { useState } from "react";
import SkillList from "./SkillList";
//import "./SkillManager.css";

const SkillManager = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: "", level: "Beginner", category: "Technical" });
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddSkill = () => {
    if (newSkill.name.trim() === "") return;
    setSkills((prev) => [...prev, { ...newSkill, id: Date.now() }]);
    setNewSkill({ name: "", level: "Beginner", category: "Technical" });
  };

  const handleDeleteSkill = (id) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="skill-manager">
      <h2>Skills Details</h2>
      <div className="add-skill-form">
        <input
          type="text"
          placeholder="Skill Name"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
        />
        <select
          value={newSkill.level}
          onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        <select
          value={newSkill.category}
          onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
        >
          <option value="Technical">Technical</option>
          <option value="Soft Skills">Soft Skills</option>
        </select>
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Skills"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <SkillList skills={filteredSkills} onDelete={handleDeleteSkill} />
    </div>
  );
};

export default SkillManager;
