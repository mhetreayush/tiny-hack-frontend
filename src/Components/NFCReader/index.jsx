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

  return (
    <div className="">
      {supported && (
        <h1 className="text-xl" onClick={startScanning}>
          {serialNumber}
        </h1>
      )}
      {children}
    </div>
  );
};

export default NFCReader;
