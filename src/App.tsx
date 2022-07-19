import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [string, setString] = useState("")
  const [styles, setStyles] = useState('')

  function generateStyles() {
    const styleStr =  string.split(";").reduce(function (ruleMap: any, ruleString) {
      var rulePair = ruleString.split(":");
      console.log(rulePair)
      ruleMap[dashToCamel(rulePair[0].trim())] = parseFloat(rulePair[1].trim()) || rulePair[1].trim();
  
      return ruleMap;
    }, {});
    console.log(styleStr)
    setStyles(JSON.stringify(styleStr))
  }
  
  function dashToCamel(str: string) {
    return str.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  }

  return (
    <div className="app">
      <textarea value={string} onChange={(e) => setString(e.target.value)}/>
      <button onClick={generateStyles}>Generate Object</button>
      <textarea value={styles} />
    </div>
  )
}

export default App
