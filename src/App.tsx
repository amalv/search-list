import { useState, useEffect } from "react";
import logo from "./acme.png";
import { Card, CardList, Filters } from "./components";
import "./App.css";

type resultProps = {
  name: string;
  city: string;
  image: string;
  specialties: string[];
};

function App() {
  const [result, setResult] = useState<resultProps[]>([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then(setResult);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          height="20%"
          width="20%"
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </header>
      <body>
        <CardList>
          <Filters />
          {result?.map(({ name, city, image, specialties }) => (
            <Card
              name={name}
              city={city}
              image={image}
              specialties={specialties}
            />
          ))}
        </CardList>
      </body>
    </div>
  );
}

export default App;
