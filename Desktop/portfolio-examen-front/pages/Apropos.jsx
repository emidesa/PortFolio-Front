import { useEffect, useState } from "react";
import AproposService from "../Services/AproposService";

const aboutMe = () => {
const [photo, setPhoto] = useState ([]);
const [icons, setIcons] = useState([]);


const fetchPhoto = async () => {
    try {
      const response = await AproposService.getAllPresentation();
      setPhoto(response.data);
      console.log(response.data);
      const iconsArray = JSON.parse(response.data.Icone);
      setIcons(iconsArray);
      console.log(iconsArray);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
}

    useEffect(() => {
        fetchPhoto();
      }, []);


      return (
        <>
          <main
            style={{
              position: "absolute",
              top: "0",
              left: "121px",
              width: "100vw",
              backgroundColor: "#2E2D2D",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              color: "white",
              fontFamily: "Roboto",
            }}
          >
            <h1>À propos</h1>
            <div>
              {photo.map((image) => (
                <div
                  key={image.idPresentation} // Clé unique pour chaque élément
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  {/* Affichage de l'image */}
                  <img
                    src={image.photo} // Utilise la clé correcte pour l'image
                    alt="Présentation"
                    style={{ width: "50%", borderRadius: "10px" }}
                  />
                  {/* Affichage d'autres informations si nécessaire */}
                  <h3>{image.Titre}</h3>
                  <p>{image.description}</p>
                  <p>Qualités: {image.Qualité}</p>
                  <div> {icons.map((icon, index) => (
                    <img key={index} src={icon} alt={`icon-${index}`} style={{ width: "50px", height: "50px" }}
                    />
                  ))}</div>
                </div>
              ))}
            </div>
          </main>
        </>
      );
    };

    
 
export default aboutMe;