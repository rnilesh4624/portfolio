import Navbar from "../components/Navbar";

function Images() {

  const photos = [
    "/gallery/mirrorselfie.jpg",
    "/gallery/partyimage.JPG"
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