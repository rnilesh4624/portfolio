import Navbar from "../components/Navbar";
import "./Images.css";

function Images() {

  const photos = [
    `${import.meta.env.BASE_URL}gallery/mirrorselfie.jpg`,
    `${import.meta.env.BASE_URL}gallery/partyimage.JPG`,
    `${import.meta.env.BASE_URL}gallery/tatto1.jpg`,
    `${import.meta.env.BASE_URL}gallery/tatto2.jpg`,
    `${import.meta.env.BASE_URL}gallery/flower1.jpg`,
    `${import.meta.env.BASE_URL}gallery/flower2.jpg`
  ];

  return (
    <>
      <Navbar />

      <section className="gallery-page">

        <div className="gallery-header">
          <h1>My Gallery</h1>
          <p>
            Memories, tattoos, flowers and beautiful moments ✨
          </p>
        </div>


        <div className="gallery-grid">

          {photos.map((photo, index) => (
            <div className="photo-card" key={index}>
              <img 
                src={photo} 
                alt={`Gallery ${index + 1}`} 
              />
            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default Images;