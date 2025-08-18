import { useState } from "react";
import './App.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={()=> setCount(count + 10)}>Increase by 10</button>
      <button onClick={() => setCount(count - 10)}>Decrease by 10  </button>
      <button onDoubleClick={()=> setCount(count+count)}>Double</button>
    </div>
  );
}

export default CounterApp;
// import { useState } from "react";

// function App() {
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState([]);

//   const searchRecipes = async () => {
//     const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//     const data = await res.json();
//     setRecipes(data.meals || []); // if null, set to empty array
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>Recipe Finder 🍲</h1>

//       <input
//         type="text"
//         placeholder="Search for a recipe..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={searchRecipes}>Search</button>

//       <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
//         {recipes.length > 0 ? (
//           recipes.map((recipe) => (
//             <div key={recipe.idMeal} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", width: "200px" }}>
//               <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: "100%" }} />
//               <h3>{recipe.strMeal}</h3>
//               <a href={recipe.strSource || "#"} target="_blank" rel="noopener noreferrer">
//                 View Recipe
//               </a>
//             </div>
//           ))
//         ) : (
//           <p>No recipes found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;