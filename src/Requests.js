import React, {useEffect, useState} from 'react';
import axios from "./axios"; //importing axios from the file that we created
import Collection from './components/Collection';
import '../src/Requests.css'



const Requests = (props) => {

    // const [loading, setloading]= useState(true)
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)

  // useEffect(()=>{

    // async function fetchData(){

    //   const request = await axios.get(props.imgurl + "/?client_id=6IRnoQ2X1ZY2DtymImE34OwJGSiAn3tH72BYAVV1SXc")
      //apiurl+key-&query&value
  //     setImages(request.data.results)
  //     console.log(request.data.results)
  //   }
  //   fetchData();
  // },[]) 
  //whenever using an outside var inside useEffect it has to be mentioned inside [] as now there is dependency on that var because everytime that var changes it will rerender and updates the result

 

useEffect(()=>{
async function fetchImages(){
  const response =  await axios.get("https://api.unsplash.com/search/photos",{
    headers:{
        Authorization: "Client-ID 6IRnoQ2X1ZY2DtymImE34OwJGSiAn3tH72BYAVV1SXc" },
        params:{
            query: props.imgurl,
            per_page: 30,
            page:page,
            oder_by:"latest"

        }  
      })
      setImages(response.data.results)
}
fetchImages()

},[page])

const NextButton=()=>{
  setPage(page+1)
  setImages(null)
  // document.getElementById('requestContainer')?.scrollIntoView({ behavior: 'smooth' });
}

if(!images) 
return 
document.getElementById('requestContainer')?.scrollIntoView({ behavior: 'smooth' });
<h5 style={{textAlign:"center", color:"gray", fontWeight:"600"}}>loading...</h5>



console.log(page)

  return (
    <div id="requestContainer" className='requestContainer'>
   
     <Collection images={images}/>
    <div  style={{margin:"1rem", display:"flex", justifyContent:"center",}}>
    <button className='btn btn-dark' onClick={NextButton}> Next Page </button>
    </div>
    </div>
  )
}

export default Requests