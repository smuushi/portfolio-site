import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "Jan 2023 - Apr 2023",
          institute: "App Academy NYC",
        },
        {
          id: 2,
          year: "2015 - 2019",
          institute: "St. John's University",
          degree: "BA Philosophy, BS Biology",
        }
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2023 - Present",
          institute: "Movie Rights Exchange",
          degree: "Software Engineer",
        },
        {
          id: 2,
          year: "2022 - Present",
          institute: "Cliffs Climbing and Fitness",
          degree: "Climbing Associate",
        },
        {
          id: 3,
          year: "2020 - 2023",
          institute: "CityMD Urgent Care",
          degree: "Clinical Shift Supervisor",
        },
        
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
