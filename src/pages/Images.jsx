import Navbar from "../components/Navbar";

function Images() {

  const photos = [
    `${import.meta.env.BASE_URL}gallery/mirrorselfie.jpg`,
    `${import.meta.env.BASE_URL}gallery/partyimage.JPG`
  ];

  return (
    <>
      <Navbar />

      <div className="gallery">

        <h1>My Gallery</h1>

        <div className="grid">

          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} />
          ))}

        </div>

      </div>
    </>
  );
}

export default Images;
