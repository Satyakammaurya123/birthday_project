import { useState } from "react";
import BirthdayUnlock from "./screens/BirthdayUnlock";
import SurpriseReady from "./screens/SurpriseReady";
import PhotoReveal from "./screens/PhotoReveal";
import BirthdayLetter from "./screens/BirthdayLetter";

function App() {
  const [screen, setScreen] = useState("unlock");

  return (
    <main className="min-h-screen w-full">
      {screen === "unlock" && (
        <BirthdayUnlock onUnlock={() => setScreen("ready")} />
      )}

      {screen === "ready" && (
        <SurpriseReady onBegin={() => setScreen("photos")} />
      )}

      {screen === "photos" && (
        <PhotoReveal onComplete={() => setScreen("letter")} />
      )}

      {screen === "letter" && <BirthdayLetter />}
    </main>
  );
}

export default App;