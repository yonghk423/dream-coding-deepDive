import React, { useState } from "react";

const AppMentors = () => {
  const [person, setPerson] = useState({
    name: "sonny",
    title: "개발자",
    mentors: [
      {
        name: "bob",
        title: "mentor",
      },
      {
        name: "james",
        title: "mentor",
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current! };
              }
              return mentor;
            }),
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
    </div>
  );
};

export default AppMentors;
