import { useRef, useState } from "react";

import BirthdayUnlock from "./screens/BirthdayUnlock";
import SurpriseReady from "./screens/SurpriseReady";
import PhotoReveal from "./screens/PhotoReveal";
import BirthdayLetter from "./screens/BirthdayLetter";

import birthdayMusic from "./assets/music/sub_clair-happy-birthday-578363.mp3";

function App() {
  const [screen, setScreen] = useState("unlock");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startMusic = () => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current
      .play()
      .catch((error) => {
        console.log("Music playback was blocked:", error);
      });
  };

  const handleBegin = () => {
    // Start birthday music after the user's tap
    startMusic();

    // Move to photos
    setScreen("photos");
  };

  return (
    <main className="min-h-screen w-full">

      {/* Background birthday music */}
      <audio
        ref={audioRef}
        src={birthdayMusic}
        loop
        preload="auto"
      />

      {/* Screen 1 - DOB */}
      {screen === "unlock" && (
        <BirthdayUnlock
          onUnlock={() => setScreen("ready")}
        />
      )}

      {/* Screen 2 - Surprise Ready */}
      {screen === "ready" && (
        <SurpriseReady
          onBegin={handleBegin}
        />
      )}

      {/* Screen 3 - Photos */}
      {screen === "photos" && (
        <PhotoReveal
          onComplete={() => setScreen("letter")}
        />
      )}

      {/* Screen 4 - Birthday Letter */}
      {screen === "letter" && (
        <BirthdayLetter />
      )}

    </main>
  );
}

export default App;