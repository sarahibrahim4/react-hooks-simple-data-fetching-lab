import React,{useState, useEffect} from "react";

function App(){
const [images, setImages] = useState([]);
const [isLoded, setIsLoded]=useState(false)
  useEffect(()=>{
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((response)=>response.json())
  .then((data)=>{
    setImages(data.message);
    setIsLoded(true);
  });},[])
  
  if(!isLoded) return <p>Loading...</p>
  return (
    <div>
    {<img src={images} alt="A Random Dog"/>}
    </div>
    
  )
}

export default App;