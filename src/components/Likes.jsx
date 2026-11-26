import { useState } from "react"

function Likes(){
   let [likes, setLikes]=useState(0)
    return (
        <div>
            <button onClick={function(){
                return setLikes(likes+1)
            }}>Like</button>
            <p>{likes}</p>
        </div>
    )
}
export default Likes