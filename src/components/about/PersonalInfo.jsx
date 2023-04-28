import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Location",
          content: "Queens, NY",
        },
        {
          id: 2,
          name: "LinkedIn",
          content: (
            <>
              <a href="https://www.linkedin.com/in/michael-shih-smuushi/">
                Connect With Me!
              </a>
            </>
          )
        },
        {
          id: 2,
          name: "GitHub",
          content: (
            <>
              <a href="https://github.com/smuushi">
                See My Code!
              </a>
            </>
          )
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mishih780@gmail.com">mishih780@gmail.com</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <>
              <a href="tel:+19176704152">+1 917 670 4152</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "USA",
        },
        {
          id: 2,
          name: "Education",
          content: "App Academy & St. Johns University",
        },
        {
          id: 3,
          name: "Degree",
          content: "BS Biology / BA Philosophy",
        },
        {
          id: 4,
          name: "Interest",
          content: "Climbing",
        },
        {
          id: 5,
          name: "Pet Status",
          content: "Fish Owner, Looking to Adopt Dog",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
