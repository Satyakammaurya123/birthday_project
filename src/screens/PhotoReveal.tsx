import { useState } from "react";

import image1 from "../assets/images/happy _bday.jpeg";
import image2 from "../assets/images/door_pic.jpeg";
import image3 from "../assets/images/red_pic.jpeg";
import image4 from "../assets/images/sitting.jpeg";
import image5 from "../assets/images/earphone.jpeg";

interface PhotoRevealProps {
  onComplete: () => void;
}

const photos = [
  {
    src: image1,
    animation: "fade",
    message: "Happy Birthday! to you my love 💖",
  },
  {
    src: image2,
    animation: "zoom",
    message: "Happy Birthday! my love 💕",
  },
  {
    src: image3,
    animation: "flip",
    message: "Happy Birthday! my love ✨",
  },
  {
    src: image4,
    animation: "slide",
    message: "Happy Birthday! my love 🥰",
  },
  {
    src: image5,
    animation: "blur",
    message: "Happy Birthday! my love ❤️",
  },
];

function PhotoReveal({ onComplete }: PhotoRevealProps) {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const handleTap = () => {
    if (currentPhoto === photos.length - 1) {
      onComplete();
      return;
    }

    setCurrentPhoto((previous) => previous + 1);
  };

  const photo = photos[currentPhoto];

  return (
    <section
      onClick={handleTap}
      className="relative flex min-h-screen w-full cursor-pointer items-center justify-center overflow-hidden bg-black"
    >
      {/* Photo */}
      <img
        key={currentPhoto}
        src={photo.src}
        alt={`Birthday memory ${currentPhoto + 1}`}
        className={`max-h-[82vh] max-w-full object-contain photo-${photo.animation}`}
      />

      {/* Dark gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Birthday message */}
      <div className="pointer-events-none absolute bottom-16 left-5 right-5 text-center">
        <p className="font-serif text-3xl font-semibold leading-tight text-white drop-shadow-lg">
          {photo.message}
        </p>

        <p className="mt-4 text-sm text-white/70">
          Tap anywhere for the next surprise ✨
        </p>
      </div>

      {/* Photo counter */}
      <div className="pointer-events-none absolute right-5 top-6 rounded-full bg-black/30 px-3 py-1 text-sm text-white backdrop-blur-sm">
        {currentPhoto + 1} / {photos.length}
      </div>
    </section>
  );
}

export default PhotoReveal;