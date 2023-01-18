import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Illustration from "./Illustration.svg"

const LoginPage = ({ onClick, onChange, value }) => {
 return (
   <>
    <input id="username" className="z-20 rounded-xl p-4 mb-24 w-[80%] h-12 bg-[#f0f0f0]" placeholder="Enter UserName" onChange={onChange} value={value}/>
    <button className="z-20 bg-[#905DE6] mb-20 h-12 w-[80%] rounded-full drop-shadow-xl shadow-[#905DE632] font-bold text-[#ffffff]" onClick={onClick} >Next</button>
    <img src={Illustration} className="absolute top-0 left-[50%] translate-x-[-50%] h-screen"/>
   </>
 ) 
}

const NFCReader = ({ children }) => {
  const [ndefReader, setNdefReader] = useState(undefined);
  const [supported, setSupported] = useState(true);
  const [serialNumber, setSerialNumber] = useState("TAP TO SCAN");
  const [username, setUsername] = useState(null)
  const [tempUsername, setTempUsername] = useState("")
  const navigate = useNavigate()

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
 
  async function handleNext(){
     setUsername(tempUsername)
    await startScanning()
    navigate("/user/" + tempUsername)
  }

  return (
    <div className="flex flex-col justify-end items-center absolute top-0 left-0 w-screen h-screen bg-[#ffffff]">
      {!username && <LoginPage onClick={handleNext} onChange={(e) => {setTempUsername(e.target.value)}} value={tempUsername}/>}
      {children}
    </div>
  );
};

export default NFCReader;
