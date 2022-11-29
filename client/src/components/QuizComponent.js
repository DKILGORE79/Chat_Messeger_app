import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


let newArray = [];

function QuizComponent() {
  let navigate = useNavigate()
  const questions = [
    {
      text: "What is your favorite book genre?",
      questionId: 0,
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
      questionId: 1,
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
      questionId: 2,
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

  function finishSignup() {
    navigate("/chat")
    // THIS FUNCTION WILL PASS IN newArray to then get it in the DB. This function will also move the user into a different page.
    // some sort of code that finds the specific answer by the questionId which will 0, 1, or 2, and pushes it to the sequelize DB.
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [checked, setChecked] = useState([]);

  function handleCheck(e) {
    let answersArray = [...checked];
    if (e.target.checked) {
      answersArray = [...checked, e.target.value];
    } else {
      answersArray.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(answersArray);
  }

  const nextQuestion = (e) => {
    e.preventDefault();
    let answersArray = [...checked];

    let submittedAnswers = {
      id: questions[currentQuestion].questionId,
      value: [...checked],
    };
    newArray.push(submittedAnswers);

    if (questions[currentQuestion + 1] != undefined) {
      setCurrentQuestion(currentQuestion + 1);
      let listElements = document.querySelector("ul").childNodes;
      listElements.forEach((item) => {
        item.querySelector("input").checked = false;
      });
      setChecked([]);

      if (questions[currentQuestion + 2] == undefined) {
        document.querySelector("button").innerHTML = "Submit Answers";
      }
    } else {
      //Handle form submission, newArray has what the database needs in terms of the final array.
      console.log(newArray);

      finishSignup();


      //
    }
  };

  return (
    <div>
      <h1>Initial Signup Questions!</h1>
      <div className="container">
        <div>{questions[currentQuestion].text}</div>
        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <div>
                <input
                  key={option.questionId}
                  value={option.text}
                  defaultChecked={false}
                  type="checkbox"
                  onClick={handleCheck}
                />
                <span key={option.id}>{option.text}</span>
              </div>
            );
          })}
        </ul>
        <button onClick={nextQuestion}>Next Question</button>
      </div>
    </div>
  );
}

export default QuizComponent;
