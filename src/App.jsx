import { useState } from "react";
import Navbar from "./Navbar"
import InputCard from "./InputCard"
import InstaReelViewer from "./InstaReelViewer"

function App() {
  const [url, setUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleDownload = () => {
    setVideoUrl(url);
    setUrl(() => '')
  };

  return (
    <>
      <Navbar />
      <InputCard
        url={url}
        onUrlChange={setUrl}
        onDownload={handleDownload}
      />

      <InstaReelViewer requestUrl={videoUrl} />
    </>
  )
}

export default App
