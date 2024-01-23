import { useState } from "react"

export default function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  const [showContent, setShowContent] = useState(true)

  function increase() {
    if (currentStep === 3) return null
    setCurrentStep(n => n + 1)
  }

  function decrease() {
    if (currentStep === 1) return null
    setCurrentStep(n => n - 1)
  }

  return (
    <div>
      <button className="close" onClick={() => setShowContent(!showContent)}>&times;</button>
      {
        showContent &&
        (<div className="steps">
          <div className="numbers">
            <div onClick={() => setCurrentStep(1)} className={`${currentStep >= 1 ? "active" : ""}`}>1</div>
            <div onClick={() => setCurrentStep(2)} className={`${currentStep >= 2 ? "active" : ""}`}>2</div>
            <div onClick={() => setCurrentStep(3)} className={`${currentStep >= 3 ? "active" : ""}`}>3</div>
          </div >

          <p className="message">
            {messages.at(currentStep - 1)}
          </p>

          <div className="buttons">
            <button
              className={`${currentStep > 1 ? "active" : ""}`}
              onClick={decrease}
              disabled={currentStep <= 1}
            >Previous</button>
            <button
              className={`${currentStep < 3 ? "active" : ""}`}
              onClick={increase}
              disabled={currentStep >= 3}
            >Next</button>
          </div>
        </div >)
      }
    </div>

  )
}