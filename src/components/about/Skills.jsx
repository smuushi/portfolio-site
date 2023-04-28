import React from "react";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Programming Skills (% based on GitHub metrics and confidence)",
      progress: [
        {
          id: 1,
          skillName: "JavaScript",
          skillValue: "95",
        },
        {
          id: 2,
          skillName: "React",
          skillValue: "95",
        },
        {
          id: 3,
          skillName: "Ruby On Rails",
          skillValue: "95",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Currently Studying (% based on confidence and progress)",
      progress: [
        {
          id: 1,
          skillName: "C",
          skillValue: "20",
        },
        {
          id: 2,
          skillName: "Go",
          skillValue: "15",
        },
        {
          id: 3,
          skillName: "Svelte",
          skillValue: "10",
        },
      ],
    },
  ];
  return (
    <>
      {skillsContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>

          <div className="tokyo_progress">
            {item?.progress?.map((skill) => (
              <div
                className="progress_inner"
                data-value={item.skillValue}
                key={skill.id}
              >
                <span>
                  <span className="label">{skill?.skillName}</span>
                  <span className="number">{skill?.skillValue}%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div
                      className="bar_in"
                      style={{ width: skill?.skillValue + "%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
