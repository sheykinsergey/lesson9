export function AddArticle(){

  return(
    <form>
      <h2>add post</h2>
      <div><input /></div>
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