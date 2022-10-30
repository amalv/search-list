import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Checkbox } from '../Checkbox';

const FiltersContainer = styled.div`
  margin: 16px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Search = styled.input`
  margin: 8px 0;
`

type Specialty = {
  name: string;
  label: string;
  selected: boolean;
}

type Specialties = Array<Specialty>;

type FiltersProps = {
  name: string,
  setName: Dispatch<SetStateAction<string>>;
  specialties: Array<Specialty>;
  setSpecialties: Dispatch<SetStateAction<Specialties>>;
}

export const Filters = ({ name, setName, specialties, setSpecialties }: FiltersProps) => {

  const handleSearchName = (e: { target: { value: SetStateAction<string>; }; }) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onChange = (currentSpecialty: Specialty) => {
    setSpecialties((currentState) =>
      currentState.map((i: Specialty) =>
        i.name === currentSpecialty.name
          ? {
            ...i,
            selected: currentSpecialty.selected
          }
          : {
            ...i,
            selected: currentSpecialty.selected ? false : i.selected
          }
      )
    )
  };
  return (
    <FiltersContainer>
      <Search
        placeholder="Search"
        onChange={handleSearchName}
      />
      {specialties.map(({ name, label, selected }) =>
        <Checkbox
          key={name}
          onSelectedChange={onChange}
          name={name}
          label={label}
          selected={selected}
        />
      )}
    </FiltersContainer>
  )
}