import Card from "../featers/Card"
import { questions } from "../data/questions"
function MainPage() {
  return (
    <div className="flex flex-wrap gap-3">
      {questions.map((q, index) => (
        <Card key={index} question={q.question} answer={q.answer} />
      ))}
    </div>
  )
}

export default MainPage