import { useEffect, useState } from "react";

const NFCReader = ({ children }) => {
  const [ndefReader, setNdefReader] = useState(undefined);
  const [supported, setSupported] = useState(true);
  const [serialNumber, setSerialNumber] = useState("TAP TO SCAN");
  async function startScanning() {
    if (!("NDEFReader" in window)) {
      setSupported(false);
      return;
    }
    const ndef = new window.NDEFReader();
    await ndef.scan();
    ndef.addEventListener("reading", (card) => {
      setSerialNumber(card.serialNumber);
    });
  }

  useEffect(() => {
    window.addEventListener("load", (event) => {
      startScanning();
    });
  }, []);

  return (
    <div className="w-screen h-screen bg-[#3232fa]">
      {supported && (
        <h1 className="text-xl text-[#fafafa] w-screen h-screen text-middle">
          {serialNumber}
        </h1>
      )}
      {children}
    </div>
  );
};

export default NFCReader;
