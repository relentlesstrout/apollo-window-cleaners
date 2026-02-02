import React, {useState} from 'react';
import Arrow from './Arrow.jsx';

function Carousel() {

    const images = [
        "/windowcleaning1.jpg",
        "/windowcleaning2.jpg",
        "/windowcleaning3.jpg",
        "/windowcleaning4.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }

    return (
        <div className="carousel relative w-full overflow-hidden mx-auto">
            {/* Image container */}
            <div
                className="image-container flex transition-transform duration-900 ease-in-out"
                style={{ transform: `translateX(-${100 * currentIndex}%)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-full flex justify-center items-center">
                        <img
                            src={src}
                            className="h-96 object-contain"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            <div className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer z-10">
                <Arrow direction="left" onClick={prevImage} />
            </div>

            {/* Right Arrow */}
            <div className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer z-10">
                <Arrow direction="right" onClick={nextImage} />
            </div>
        </div>
    );

}

export default Carousel;