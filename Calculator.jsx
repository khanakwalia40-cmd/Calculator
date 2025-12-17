import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("Add");
  const [results, setResults] = useState([]);

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>

      <button>Perform Action</button>

      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;
