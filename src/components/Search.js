import React from "react";

const Search = () => {
  return (
    <div>
      {/* <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select> */}

      <input type="text" placeholder="Search.." />
      <button type="submit">Search</button>
    </div>
  );
};

export default Search;
