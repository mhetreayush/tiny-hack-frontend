import { useEffect, useState } from "react";

const ScannerComponent = () => {
  const [NfcAvailable, setNfcAvailable] = useState(true);

  useEffect(() => {
    if (!("NDEFReader" in window)) {
      //   alert("Your browser doesn't support Web NFC. Try Chrome for Android.");
      setNfcAvailable(false);
      return;
    }
  }, []);

  const scan = async () => {
    if ("NDEFReader" in window) {
      try {
        setNfcAvailable(true);
        const ndef = new window.NDEFReader();
        await ndef.scan();

        console.log("Scan started successfully.");
        ndef.onreadingerror = () => {
          console.log("Cannot read data from the NFC tag. Try another one?");
        };

        ndef.onreading = (event) => {
          console.log("NDEF message read.");
          onReading(event); //Find function below
        };
      } catch (error) {
        console.log(`Error! Scan failed to start: ${error}.`);
      }
    }
  };

  const onReading = ({ message, serialNumber }) => {
    console.log(serialNumber);
    for (const record of message.records) {
      switch (record.recordType) {
        case "text":
          const textDecoder = new TextDecoder(record.encoding);
          console.log("Message: ", textDecoder.decode(record.data));
          break;
        case "url":
          // TODO: Read URL record with record data.
          console.log("URL:", record.data);
          alert("URL:", record.data);
          break;
        default:
        // TODO: Handle other records with record data.
      }
    }
  };

  const onWrite = async () => {
    try {
      const ndef = new window.NDEFReader();
      await ndef.write({
        records: [{ recordType: "text", data: "Hellow World!" }],
      });
      console.log(`Value Saved!`);
      alert(`Value Saved!`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#EFEFE1] h-screen">
      {NfcAvailable && (
        <>
          <button onClick={scan}>Scan</button>
          <button onClick={onWrite}>Write</button>
        </>
      )}
      {!NfcAvailable && (
        <>
          <h1>
            Sorry, your browser doesn't support Web NFC. Try Chrome for Android.
          </h1>
        </>
      )}
    </div>
  );
};

export default ScannerComponent;
