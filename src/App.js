import React from "react";
import Data from "./db1.json"

function App(){
  return(
    <div className ="App">
    <div className ="posts">
      {
        Data.map(post =>{
          return(
            <ul>
              <li><h3>{post.author}</h3>{post.title}<br/>{post.description}<a class="button" href={post.url}>Know More</a><br/><img src ={post.urlToImage} width="800" height="600" />
              <br/> {post.publishedAt}<br/>{post.content}</li>
            </ul>
            
            
          )
        })
      }
      </div>
      </div>
    
  );
}

export default App;

