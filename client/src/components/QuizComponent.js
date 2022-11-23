import React, { useState, useEffect } from "react";

function QuizComponent() {
  const questions = [
    {
      text: "What is your favorite book genre?",
      options: [
        { id: 0, text: "Romance" },
        { id: 1, text: "Detective/Mystery" },
        { id: 2, text: "Horror" },
        { id: 3, text: "Thriller" },
        { id: 4, text: "Young Adult" },
        { id: 5, text: "Fantasy" },
        { id: 6, text: "Dystopian" },
        { id: 7, text: "Science Fiction" },
      ],
    },
    {
      text: "What is your favorite kind of food?",
      options: [
        { id: 0, text: "Italian" },
        { id: 1, text: "Asain" },
        { id: 2, text: "Mexican" },
        { id: 3, text: "North American" },
        { id: 4, text: "Ethiopian" },
        { id: 5, text: "Breakfast" },
        { id: 6, text: "Indian" },
        { id: 7, text: "Greek" },
      ],
    },
    {
      text: "What is your favorite genre of movie?",
      options: [
        { id: 0, text: "Horror" },
        { id: 1, text: "Detective/Mystery" },
        { id: 2, text: "Sci-fi" },
        { id: 3, text: "Action" },
        { id: 4, text: "Comedy" },
        { id: 5, text: "Thriller" },
        { id: 6, text: "Adventure" },
        { id: 7, text: "Animated" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [textColor, setTextColor] = useState("green");
  const [isBlack, setIsBlack] = useState(true);

  const handleChangeTextColor = (e) => {
    setIsBlack(!isBlack);
    setTextColor(isBlack ? "00FF00" : "green");
    console.log("CLICKCLICK")
  };

  const optionClicked = (e) => {
    // Needs code that selects the answer and stores it in a value to put in the database. I will temporarily store it in a variable.

    const newArray = [];
    const bookArray = [];
    const foodArray = [];
    const movieArray = [];


  };

  return (
    <div>
      <h1>Initial Signup Questions!</h1>
      <div className="container">
        <div>{questions[currentQuestion].text}</div>
        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li value={isBlack} onChange={handleChangeTextColor}
                onClick={() => {
                  optionClicked();
                  handleChangeTextColor();
                }}
                key={option.id}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default QuizComponent;
