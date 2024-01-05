import Carousel from "react-bootstrap/Carousel";

function CarouselEvents({ slides }) {
  return (
    <Carousel data-bs-theme="w-[600px] dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="relative h-[350px] w-[600px] mx-auto">
            {/* Immagine a tutto schermo */}
            <img
              className="w-full h-full object-cover"
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
            
            {/* Contenitore assoluto per la caption */}
            <div className="absolute bottom-3 left-0 right-0 bg-black bg-opacity-50 text-white">
              <div className="text-center p-4">
                <h5>{slide.title}</h5>
                <p>{slide.caption}</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselEvents;
