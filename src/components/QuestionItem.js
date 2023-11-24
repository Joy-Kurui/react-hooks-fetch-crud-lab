import React from "react";

function QuestionItem({ question, onDelete}) {
  console.log(question)
  const { id, prompt, answers, correctIndex } = question;

  const options = answers && answers.length > 0 && answers.map((answer, index) => (
    <option key={id + index} value={index}>
      {answer}
    </option>
  ));
function HandleClickDelete(){
fetch(`http://localhost:4000/questions/${question.id}`,{
  method: "DELETE"})
  .then((res) => res.json())
  .then(() =>onDelete(question))
}

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={HandleClickDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
