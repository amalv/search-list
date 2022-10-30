import React from 'react';
import styled from "styled-components";
import icon from './icon.svg';

interface CardProps {
  name: string;
  city: string;
  image: string;
  specialties: string[];
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 300px;
  margin-bottom: 16px;
`;

const InfoContainer = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const City = styled.div`
  color: black;
`;

const ChipContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Chip = styled.div`
  align-self: flex-start;
  color: grey;
  display: inline-flex;
  background-color: #e1e0e1;
  border-radius: 2rem;
  padding: 0.5rem;
  font-size: 12px;
  height: 8px;
  align-items: center;
  justify-content: center;
`;

const Specialty = styled.span`
  display: inline-flex;
`;


const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ImageContainer = styled.div`
  margin: 8px 0;
`

export const Card = ({ name, city, image, specialties }: CardProps) => {
  return (
    <CardContainer >
      <InfoContainer>
        <Name>{name}</Name>
        <LocationContainer>
          <img height="16px" src={icon} alt="location" />
          <City>{city}</City>
        </LocationContainer>
      </InfoContainer>
      <ImageContainer>
        <img alt="companyLogo" src={image} />
      </ImageContainer>
      <ChipContainer>
        {specialties?.map((specialty) =>
          <Chip key={specialty}>
            <Specialty>{specialty}</Specialty>
          </Chip>
        )}
      </ChipContainer>
    </CardContainer >
  );
};
