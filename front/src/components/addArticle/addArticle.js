import { useState } from "react"

export function AddArticle(){

  const [inputValue, setInputValue] = useState("default text")

  const handleChange = (e) =>{
    setInputValue(e.target.value)
  }

  return(
    <form>
      <h2>add post</h2>
      <div><input value={inputValue} onChange={handleChange}/></div>
      <div><textarea /></div>
      <div>
        <select>
          <option>for me</option>
          <option>for friends</option>
          <option>for all</option>
        </select>
      </div>
      <button>add post</button>
    </form>
  );
};