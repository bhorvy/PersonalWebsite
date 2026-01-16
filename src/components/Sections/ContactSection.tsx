function ContactSection() {

  return (
    <div className="section-div">
      <img
        src="../../../PhotosNDocs/circle.jpg"
        alt='Tube with guy at end b&w'
        className="section-image"
      />
      <div className="container text-center section-text">
        <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '30vh', minWidth: '40vh' }}
          onClick={() => window.location.href = "Contact"}>
          <h2 data-usal="fade-u split-letter split-delay-25">Contact Me</h2>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;