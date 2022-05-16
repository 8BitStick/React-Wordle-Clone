import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'

function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    fetch('https://api.datamuse.com/words?sp=?????&max=1000')
      .then(res => res.json())
      .then(json => {
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App
