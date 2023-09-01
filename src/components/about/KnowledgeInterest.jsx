import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        " Languages: JavaScript, Ruby, Solidity, Java, Python, SQL, HTML, CSS",
        " AWS, Lambda, DocumentDB, IAM",
        " Ruby On Rails, Express, Django",
        " React, Vite, NextJS, Vue",
        " PostgreSQL, Sqlite3",
        " DocumentDB, MongoDB",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        " Computer Systems",
        " Cloud Optimizations and Infrastructure",
        " Web3 Implementations",
        " Open Source",
        
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
