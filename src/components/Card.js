import styled from "@emotion/styled";


const CardComponent = styled.div`
 background-color:#1C1C1C;
 width: 150px;
 height: 200px;
 display: flex;
 flex-direction: column;
 border-radius: 10px;
 padding: 5px;
`
const CardElement = styled.div`
 padding: 10px;
`
const Name = styled.p`
  color: white;
  text-align: center;
  margin-top: 10px;
`

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  margin: 0 auto;
  margin-top: 20px;
`


const Card = ({item}) => {
    return (
        <CardElement>
            <CardComponent>
              <Avatar  src={item.thumbnail} />
              <Name>{item.name}</Name>
             </CardComponent>
        </CardElement>
      );
}
 
export default Card;


