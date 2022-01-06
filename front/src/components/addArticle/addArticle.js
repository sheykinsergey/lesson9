import { useState } from "react"

export function AddArticle(){

  const [inputValue, setInputValue] = useState("input text")
  const [textAreaValue, setTextAreaValue] = useState("textArea text")
  const [result, setResult] = useState("")
  const [select, setSelect] = useState("")

  const handleInput = (e) =>{
    setInputValue(e.target.value)
  }
  const handleTextArea = (e) =>{
    setTextAreaValue(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault()
    setResult(inputValue + " " + textAreaValue + " " + select)
  }
  const handleSelect = (e) => {
    setSelect(e.target.value)
  }

  return(
    <>
    <form>
      <h2>add post</h2>
      <div><input value={inputValue}  onChange={handleInput}/></div>
      <div><textarea value={textAreaValue} onChange={handleTextArea}/></div>
      <div>
        <select value={select} onChange={handleSelect}>
          <option>for me</option>
          <option>for friends</option>
          <option>for all</option>
        </select>
      </div>
      <button onClick={handleClick}>add post</button>
    </form>
    {result}
    </>
  );
};