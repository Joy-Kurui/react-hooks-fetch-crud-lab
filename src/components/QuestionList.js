// import React from "react";
// import { useEffect, useState } from "react";
// import QuestionItem from "./QuestionItem";
// import QuestionForm from "./QuestionForm";


// function QuestionList() {
// const [questions, setQuestions] = useState('')

// useEffect(() =>{
//   fetch("http://localhost:4000/questions")
//   .then(res => res.json())
//   .then((questions) => 
//   //console.log(questions))
//   setQuestions (questions))
//   .catch((error) => console.error("Error fetching questions:", error))
  
// }, [])

//   // function handleAddNewQuestion(newQuestion){
//   // setQuestions([...questions, newQuestion])
//   // }


//   return (
//     <section>
//       <h1>Quiz Questions</h1>
//       <ul>
//         {questions && questions.map((question) => (
//         <QuestionItem 
//         key={question.id}
//         question={question}/>
//         ))}
//       </ul>
//       {/* <QuestionForm onAddQuestion={handleAddNewQuestion} /> */}
//     </section>
//   );
// }

// export default QuestionList;
import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questions) => {setQuestions(questions)} )
      .catch((error) => console.error("Error fetching questions:", error));
    }, []);

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
    }
 
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions && questions.length > 0 && questions.map((question) => (
      <QuestionItem key={question.id} question={question} onDelete={handleDeleteQuestion} />
      ))}
      </ul>
    
    </section>
  );
}

export default QuestionList;
