const CardProfile = ({gnome}) => {

   

    if(!gnome) return <p>Loading...</p>
    
        return (
            <div>
              <h1>{gnome.name}</h1>
              <p></p>
            </div>
          );
    }
     
    export default CardProfile;