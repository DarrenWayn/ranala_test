import React, { useState } from "react";

function App() {
  const [value, setValue] = useState();
  const [buttonSubmit, setButtonSubmit] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const generatePrime = (value) => {
    const isPrime = (num) => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };

    let prime = 2;
    while (value > 0) {
      if (isPrime(prime)) {
        console.log(prime);
        value--;
      }
      prime++;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonSubmit === "generate-segitiga") {
      console.log("segitiga");
      for (let i = 1; i <= value; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
          row += j + " ";
        }
        console.log(row);
        setResults(row);
      }
      setValue("");
    } else if (buttonSubmit === "generate-ganjil") {
      console.log("ganjil");
      let i = value;
      while (i < 10) {
        console.log(i);
        i += 2;
        setResults(i);
      }
      setValue("");
    } else {
      console.log("prima");
      generatePrime(value);
      setValue("");
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          placeholder="Input Angka"
          value={value}
          onChange={handleChange}
        />
        <button onClick={() => setButtonSubmit("generate-segitiga")}>
          Generate Segitiga
        </button>
        <button onClick={() => setButtonSubmit("generate-ganjil")}>
          Generate Bilangan Ganjil
        </button>
        <button onClick={() => setButtonSubmit("generate-prima")}>
          Generate Bilangan Prima
        </button>
      </form>

      <div className="result">
        <ul>
          <li>{results}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
