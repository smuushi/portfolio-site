import React from "react";

const FunFact = () => {
  const funFactContent = [
    {
      id: 1,
      number: "400+",
      meta: "GitHub Contributions",
    },
    {
      id: 3,
      number: "10,000+",
      meta: "Lines of Code",
    },
    {
      id: 2,
      number: "V5 / 5.12a", 
      meta: "Project Climbs"
    }
  ];
  return (
    <>
      {funFactContent.map((item) => (
        <li key={item.id}>
          <div className="list_inner">
            <h3>{item.number}</h3>
            <span>{item.meta}</span>
          </div>
        </li>
      ))}
    </>
  );
};

export default FunFact;
