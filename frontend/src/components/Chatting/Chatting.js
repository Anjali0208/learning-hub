import React, { useState } from "react";

function QuoraFeature() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newComment, setNewComment] = useState("");
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const handleQuestionChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleLikeQuestion = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].liked = true;
    setQuestions(updatedQuestions);
  };

  const handleSubmitQuestion = () => {
    if (newQuestion.trim() !== "") {
      setQuestions([
        ...questions,
        { question: newQuestion, liked: false, comments: [] },
      ]);
      setNewQuestion("");
    }
  };

  const handleSubmitComment = (questionIndex) => {
    if (newComment.trim() !== "") {
      const updatedQuestions = [...questions];
      updatedQuestions[questionIndex].comments.push(newComment);
      setQuestions(updatedQuestions);
      setNewComment("");
    }
  };

  return (
    <div>
      <h1>Welcome to Quora</h1>
      <div>
        <textarea
          rows="4"
          cols="50"
          value={newQuestion}
          onChange={handleQuestionChange}
          placeholder="Ask your question..."
        ></textarea>
        <br />
        <button onClick={handleSubmitQuestion}>Ask</button>
      </div>
      <div>
        <h2>Questions</h2>
        {questions.length === 0 ? (
          <p>No questions yet.</p>
        ) : (
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <h3>{question.question}</h3>
                <button
                  disabled={question.liked}
                  onClick={() => handleLikeQuestion(index)}
                >
                  {question.liked ? "Liked" : "Like"}
                </button>
                {activeQuestionIndex === index ? (
                  <>
                    <textarea
                      rows="2"
                      cols="50"
                      value={newComment}
                      onChange={handleCommentChange}
                      placeholder="Add your comment..."
                    ></textarea>
                    <br />
                    <button onClick={() => handleSubmitComment(index)}>
                      Comment
                    </button>
                    <button onClick={() => setActiveQuestionIndex(null)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setActiveQuestionIndex(index)}>
                      Add Comment
                    </button>
                    <ul>
                      {question.comments.map((comment, commentIndex) => (
                        <li key={commentIndex}>{comment}</li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default QuoraFeature;
