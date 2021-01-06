
import React, { useState, useEffect } from "react"

function Response() {
  const [items, setItems] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      console.log("hi",res)
      return res.json()
    })
    .then((res)=>{
        console.log("hi",res)
        setItems(res)
    })
    .catch(err => console.log(err))
  },[])

  
      if(items.length!==0){
          return(
    <div className="App-container ">
        <div className="title" >
       {

         items.map(item => <div className="grid-item" key={item.id}> {item.title}   </div>)
       }
       </div>
    </div>)}
    else{
        return(
            <div>LOADING....</div>
        )
    }
  
  }

export default Response;
