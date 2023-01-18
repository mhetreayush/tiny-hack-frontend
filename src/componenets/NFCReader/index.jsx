import {useEffect, useState} from "react"

const NFCReader = ({children}) => {
  const [ndefReader, setNdefReader] = useState(undefined);
  const [supported, setSupported] = useState(true)
  const [serialNumber, setSerialNumber] = useState("SERIAL NUMBRE")
  async function startScanning(){
    if (!("NDEFReader" in window)) {
      setSupported(false)
      return 
    }
    const ndef = new window.NDEFReader();
    await ndef.scan();
    ndef.addEventListener("reading", (card) => {
      setSerialNumber(card.serialNumber) 
    });
  }

  useEffect(() => {
  }, [])

  return (
    <div className="w-screen h-screen bg-[#3232fa]">
    {supported &&<h1 className="text-xl text-[#fafafa]" onClick={startScanning}>{serialNumber}</h1>}
      {children} 
    </div>
  )
}

export default NFCReader
