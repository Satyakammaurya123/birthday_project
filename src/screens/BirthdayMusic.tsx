import { useEffect, useRef } from "react";

import birthdayMusic from "../assets/music/sub_clair-happy-birthday-578363.mp3";

interface BirthdayMusicProps {
  play: boolean;
}

function BirthdayMusic({ play }: BirthdayMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (play) {
      audioRef.current.play().catch((error) => {
        console.log("Music playback was blocked:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  return (
    <audio
      ref={audioRef}
      src={birthdayMusic}
      loop
      preload="auto"
    />
  );
}

export default BirthdayMusic;