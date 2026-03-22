import { useState } from "react";

function Card({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(true);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-4 rounded-lg shadow-md m-4 w-[390px] h-[200px] flex justify-center items-center flex-col cursor-pointer 
      ${showAnswer ? "bg-red-400 text-white" : "bg-gray-200"}`}
    >
      {!showAnswer ? (
        <p>{question}</p>
      ) : (
        <p>{answer}</p>
      )}
    </div>
  );
}

export default Card;