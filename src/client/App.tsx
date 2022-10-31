import React, { useState, useEffect } from "react";
import { Card, CardList, Filters } from "./components";
import "./App.css";

const SpecialtyArray = [
  {
    name: 'excavation',
    label: 'Excavation',
    selected: false,
  },
  {
    name: 'plumbing',
    label: 'Plumbing',
    selected: false,
  },
  {
    name: 'sanitation',
    label: 'Sanitation',
    selected: false,
  },
  {
    name: 'electrical',
    label: 'Electrical',
    selected: false,
  },
  {
    name: 'roofing',
    label: 'Roofing',
    selected: false,
  },
]

export type resultProps = {
  name: string;
  city: string;
  image: string;
  specialties: string[];
};

type Specialty = {
  name: string,
  label: string,
  selected: boolean,
}

type Specialties = Array<Specialty>;

function App() {
  const [result, setResult] = useState<resultProps[]>([]);
  const [specialties, setSpecialties] = useState<Specialties>(SpecialtyArray)
  const [name, setName] = useState("");
  const selectedSpecialty = specialties.filter((specialty) => specialty.selected)[0]?.name;
  const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://search-list-server.herokuapp.com';
  const url = `${baseUrl}/companies?`;
  const params = new URLSearchParams();

  if (selectedSpecialty) {
    params.append('specialty', selectedSpecialty)
  }

  if (name) {
    params.append('search', name);
  }

  const urlWithParams = url + params;

  useEffect(() => {
    fetch(urlWithParams)
      .then((res) => res.json())
      .then(setResult);
  }, [urlWithParams]);

  return (
    <div className="App">
      <h1>List of construction companies with specialty and name filters</h1>
      <CardList>
        <Filters name={name} setName={setName} specialties={specialties} setSpecialties={setSpecialties} />
        {result?.map(({ name, city, image, specialties }) => (
          <Card
            key={name}
            name={name}
            city={city}
            image={image}
            specialties={specialties}
          />
        ))}
      </CardList>
    </div>
  );
}

export default App;
