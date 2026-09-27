const photos = [
  {
    src: `${import.meta.env.BASE_URL}images/profile.jpeg`,
    alt: "Nilesh Rathod",
    caption: "Nilesh Rathod",
  },
  // Add your photos here after placing them in public/images/gallery/.
  // Example: { src: `${import.meta.env.BASE_URL}images/gallery/photo-1.jpg`, alt: "Description", caption: "Caption" },
];

function Images() {
  return (
    <main className="gallery-page">
      <a className="back-home" href={`${import.meta.env.BASE_URL}`}>
        ← Back to portfolio
      </a>

      <header className="gallery-intro">
        <p className="gallery-kicker">Personal collection</p>
        <h1>Images</h1>
        <p>A few moments, captured in my own style.</p>
      </header>

      <section className="photo-grid" aria-label="Personal photo gallery">
        {photos.map((photo) => (
          <figure className="photo-card" key={photo.src}>
            <img src={photo.src} alt={photo.alt} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}

export default Images;
