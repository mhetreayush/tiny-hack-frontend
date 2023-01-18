import {useEffect, useState} from "react"

const NFCReader = ({children}) => {
  const [ndefReader, setNdefReader] = useState(undefined);
  const [supported, setSupported] = useState(true)
  const [serialNumber, setSerialNumber] = useState(true)

  useEffect(() => {
    async function startScanning(){
      const ndef = new NDEFReader();
      await ndef.scan();
      ndef.addEventListener("reading", (card) => {
        
      });
    }

    if (!("NDEFReader" in window)) {
      setSupported(false)
    }else{
      startScanning();
    }
  }, [])

  return (
    <div className="w-screen h-screen bg-[#3232fa]">
    {supported &&<h1 className="text-xl text-[#fafafa]">{serialNumber}</h1>}
      {children} 
    </div>
  )
}

export default NFCReader
