import { useState } from "react";

/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({todos}) {

  const [completed, setCompleted] = useState(false);

  const handleCompletion = () => {
    setCompleted(true);
  }

  return (
    <div className="text-yellow-500">
      {todos.map(function(todo) {
          return <div>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button onClick={handleCompletion} className="bg-black mb-4">{completed == true ? "Completed" : "Mark as Complete"}</button>
          </div>
      })}
  </div>
  )
}