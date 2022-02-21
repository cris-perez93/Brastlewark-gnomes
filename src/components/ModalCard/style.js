import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-top: 20px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Avatar = styled.img`
  width: 250px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Camp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: whitesmoke;
  padding: 10px;
`;

export const Heading = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
export const ProfessionsCamp = styled.ul`
  
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  
`;

export const FriendsCamp = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;
