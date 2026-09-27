import Navbar from "../components/Navbar";
import "./Images.css";

function Images() {

  const photos = [
    `${import.meta.env.BASE_URL}gallery/mirrorselfie.jpg`,
    `${import.meta.env.BASE_URL}gallery/partyimage.JPG`,
    `${import.meta.env.BASE_URL}gallery/tattoo1.jpg`,
    `${import.meta.env.BASE_URL}gallery/tattoo2.jpg`,
    `${import.meta.env.BASE_URL}gallery/flower1.jpg`,
    `${import.meta.env.BASE_URL}gallery/flower2.jpg`
  ];


  return (
    <>
      <Navbar />

      <section className="gallery-page">

        <div className="gallery-header">
          <h1>My Gallery</h1>
          <p>Memories • Tattoos • Flowers • Moments</p>
        </div>


        <div className="floating-gallery">

          {photos.map((photo,index)=>(
            
            <div 
              className={`floating-image image-${index+1}`}
              key={index}
            >

              <img 
                src={photo}
                alt="gallery"
              />

            </div>

          ))}

        </div>


      </section>
    </>
  );
}


export default Images;