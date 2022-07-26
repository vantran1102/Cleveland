import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import axios from 'axios';
function App() {
    const [post, setPost] = useState([]) //useState let you add React to func, declare new state variable
    const [visible, setVisible] = useState(1)
    
   
    const dataURL = "https://openaccess-api.clevelandart.org/api/artworks"
    const getData = (limit)=>{
        const params ={
            limit: limit
        };
       
        axios.get(dataURL,{params}).then((res)=>{
          const record = [];
          const recordImage = [];
          for(const image of res.data.data){
            record.push(image.images.web.url);
              
        }
        // const recordImage = record.sort(()=>Math.random()-0.5).slice(0,record.length)
        // console.log("record",record)
        // const randomImageValue = record[Math.floor(Math.random()*record.length)];
        // console.log("random", randomImageValue)
        // ===============================
        // if (recordImage.length === 0){
        //     for(var i=0;i < record.length;i++){
        //         recordImage.push(record[i]);
                
        //   }
        //   console.log("record image",recordImage)
        // }
        // const randomImageValue = recordImage[Math.floor(Math.random()*recordImage.length)];//pick random value from record into arr
        //       console.log("random image value", randomImageValue)
       
        // const indexOfImageItem = recordImage.indexOf([randomImageValue]);////get unaccess value from random
        //       console.log("index of image item", indexOfImageItem)
        
        // recordImage.splice(randomImageValue,1);//remove the access value from randomImageValue
      
        // console.log("random image value 2", randomImageValue)
        // console.log("record image 2",recordImage)
       
        // const array = record[indexOfImageItem];//get the value
        // console.log("get the value", array)
        // console.log("hello", recordImage)
        // console.log("getImage",record)
        
        // console.log("image", image)
        // console.log("getImage",record[3])
        //=============================n==
        
        setPost(record)
       
        
    })
    .catch(err=>{
      console.log("Error",err)
    })
    }
    
    useEffect(()=>{
      getData(4)
      
  },[]);
// const randomImage = (url) =>{
//     if(recordImage.length === 0){
//       for(var i=0; i < url.length; i++){
//         recordImage.push(i);
//       }
//     }
//     const randomImageIndex = Math.floor(Math.random()*recordImage.length);//get random value in recordImage
//     const indexOfImageItem = recordImage[randomImageIndex];//save randomImageIndex of recordImage into index
//     recordImage.splice(randomImageIndex,1)//get 1 value in randomeImage
//     return url[indexOfImageItem];
//}

  const loadImage = ()=>{
  setVisible(visible + 1)
}

    return (
      
      <div><h1>Heading</h1>
      console.log("in between heading and title")
      <h2>Title</h2> 
        
      {/*Load 1 image at a time */}   
      <div>{post.slice(0,visible).map(key =>{
            return (<img src={key}/>)
       
       })}
            {visible < post.length && (
                <button onClick={loadImage}>Next Image</button>
            )}
      
      </div> 

       console.log("in return 2")
 
    </div>

  );
}

export default App;
