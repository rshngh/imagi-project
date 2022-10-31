import axios from "axios"



export async function FetchImage(query){
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: "Client-ID 6IRnoQ2X1ZY2DtymImE34OwJGSiAn3tH72BYAVV1SXc" },
            params:{
                query: query,
                per_page: 1
            }  
           } 
          )     
          console.log("response from apicalls", response.data.results)
          return response.data.results
            
  
}

export async function FetchImages(query,count){
  console.log(query,count)
 

 const response = await axios.get("https://api.unsplash.com/search/photos",{
      headers:{
          Authorization: "Client-ID 6IRnoQ2X1ZY2DtymImE34OwJGSiAn3tH72BYAVV1SXc" },
          params:{
              query: query,
              per_page: count
          }  
         } 
        )     
        console.log("response from apicalls", response.data.results)
        return response.data.results
        // response.then(function(res){return console.log("res from APICalls",res.data.results) })
          
           
  } 


  export async function FetchCollections(query){
    const response =  await axios.get("https://api.unsplash.com/collections",{
        headers:{
            Authorization: "Client-ID 6IRnoQ2X1ZY2DtymImE34OwJGSiAn3tH72BYAVV1SXc" },
            params:{
                query: query,
                per_page: 100
            }  
          })
          return response.data
    }

    export async function FetchCollectionTitle(query,count){
        const response =  await axios.get("https://api.unsplash.com/collections",{
            headers:{
                Authorization: "Client-ID 6IRnoQ2X1ZY2DtymImE34OwJGSiAn3tH72BYAVV1SXc" },
                params:{
                    query: query,
                    per_page: count
                }  
              })
              return response.data
        }
    


       

  