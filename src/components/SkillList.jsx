import React, { useState } from "react";
//import "./SkillList.css";

const SkillList = ({ skills, onDelete }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSelectSkill = (id) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((skillId) => skillId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedSkills.length === skills.length) {
      setSelectedSkills([]);
    } else {
      setSelectedSkills(skills.map((skill) => skill.id));
    }
  };

  const handleBulkDelete = () => {
    selectedSkills.forEach((id) => onDelete(id));
    setSelectedSkills([]);
  };

  return (
    <div className="skill-list">
      <div className="skill-header">
        <input
          type="checkbox"
          checked={selectedSkills.length === skills.length && skills.length > 0}
          onChange={toggleSelectAll}
        />
        <span>Select All</span>
      </div>
      {skills.map((skill) => (
        <div key={skill.id} className="skill-item">
          <input
            type="checkbox"
            checked={selectedSkills.includes(skill.id)}
            onChange={() => toggleSelectSkill(skill.id)}
          />
          <span>{skill.name}</span>
          <span>({skill.level})</span>
          <span>Category: {skill.category}</span>
          <button onClick={() => onDelete(skill.id)}>Delete</button>
        </div>
      ))}
      {selectedSkills.length > 0 && (
        <button className="bulk-delete" onClick={handleBulkDelete}>
          Delete Selected Skills
        </button>
      )}
    </div>
  );
};

export default SkillList;

