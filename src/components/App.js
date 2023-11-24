import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questions) => {setQuestions(questions)} )
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleAddNewQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddNewQuestion}/> : <QuestionList />}
    </main>
  );
}

export default App;
