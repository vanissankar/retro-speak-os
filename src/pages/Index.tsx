import { useState } from "react";
import { BootSequence } from "@/components/BootSequence";
import { Desktop } from "@/components/Desktop";

const Index = () => {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      {!bootComplete ? (
        <BootSequence onBootComplete={() => setBootComplete(true)} />
      ) : (
        <Desktop />
      )}
    </>
  );
};

export default Index;
