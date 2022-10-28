import { useState } from 'react';
import styled from 'styled-components';
import { Checkbox } from '../Checkbox';

const FiltersContainer = styled.div`
  width: 300px;
  display: flex;
`;

export const Filters = () => {
  const [isCheckedA, setIsCheckedA] = useState(false);
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
  };

  return (
    <FiltersContainer>
      <Checkbox
        handleChange={handleChangeA}
        isChecked={isCheckedA}
        label="Excavation"
      />
    </FiltersContainer>
  )
}