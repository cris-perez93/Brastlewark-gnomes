import styled from "styled-components";
import { keyframes } from "styled-components";

const showCard = keyframes`
  from {
		opacity: 0;
	}
`;

export const CardComponent = styled.div`
 background-color:#1C1C1C;
 width: 150px;
 height: 200px;
 display: flex;
 flex-direction: column;
 border-radius: 10px;
 padding: 5px;
 animation: ${showCard} 0.5s linear;

	
`

export const Name = styled.p`
  color: white;
  text-align: center;
  margin-top: 10px;
`

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  size: 80px;
  border-radius: 100%;
  margin: 0 auto;
  margin-top: 20px;
`