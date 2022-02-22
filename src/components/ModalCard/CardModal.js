import { Modal } from "react-responsive-modal";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import PropTypes from 'prop-types'
import {FriendsCamp,ProfessionsCamp, ContainerCard, Avatar, ContainerInfo, Camp, Heading } from "./style";

const CardModal = ({ gnomeId }) => {
  let navigate = useNavigate();

  const { friends, name, age, hair_color, height, professions, thumbnail, weight } =
    gnomeId;

   if(!gnomeId) return <p>Loading...</p>;

  return (
    <Modal
      styles={{
        modal: {
          borderRadius: "10px",
          maxWidth: "90%",
          maxHeight: "1200px",
          padding: "10px",
          width: "600px",
          margin: '0 auto',
          backgroundColor: "rgb(226, 226, 226)",
        },
      }}
      center
      open
      onClose={() => navigate("/")}
    >
      <ContainerCard>
        <Avatar src={thumbnail} />
        <h2>{name}</h2>
        <ContainerInfo>
          <Camp>
            <Heading>Professions</Heading>
            <ProfessionsCamp>
              
              {professions.length > 0 ? (
                professions.map((profesion) => (
                  <Button key={profesion} size="small" variant= 'outlined' >{profesion}</Button>
                ))
              ) :  <p>!I still can't find my profession! </p>}
            </ProfessionsCamp>
          </Camp>
          <Camp>
            <Heading>Age</Heading>
            <p>{age}</p>
          </Camp>
          <Camp>
            <Heading>Height</Heading>
            <p>{height}</p>
          </Camp>
          <Camp>
            <Heading>Weight</Heading>
            <p>{weight}</p>
          </Camp>
          <Camp>
            <Heading>Hair Color</Heading>
            <p>{hair_color}</p>
          </Camp>
          <Camp>
            <Heading>Friends</Heading>
            <FriendsCamp>
            
            {friends.length > 0 ? (friends.map(friend => (
              <Link key={friend} to = {`/gnome/${friend}`}><Button size="small" variant = 'contained'>{friend}</Button></Link>
            
            ))) : <p>Ups! no friends found.</p>  }
            </FriendsCamp>
          </Camp>
        </ContainerInfo>
      </ContainerCard>
    </Modal>
  );
};

CardModal.propTypes = {
  gnomeId:PropTypes.object.isRequired,
}

export default CardModal;
