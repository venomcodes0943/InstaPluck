import { useState } from "react";
import Navbar from "./Navbar";
import InputCard from "./InputCard";
import InstaReelViewer from "./InstaReelViewer";
import Tabs from "./Tabs";

function App() {
  const [url, setUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleDownload = () => {
    setVideoUrl(url);
    setUrl(() => "");
  };

  return (
    <>
      <Navbar />
      {/* <Tabs /> */}
      <div className="px-4">
        <InputCard url={url} onUrlChange={setUrl} onDownload={handleDownload} />
      </div>
      <InstaReelViewer requestUrl={videoUrl} />
    </>
  );
}

export default App;
