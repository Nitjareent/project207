import React from 'react'
 
function Comment(props) {
   return (
       <article className="media">
               <p className="image is-64x64">
                   
               </p>
           <dir className="media-content">
               <div className="check">
                   <p className="control">
                       <input type="number"  id="1" name="comment" min="0" max="99" defaultValue="0" onChange={props.onChange} />
                       <label >        ผัดกระเพรา จานละ 40</label>
                   </p>
               </div>
               
           </dir>
           

           <nav className="level-right">
                   <div className="level-left">
                       <div className="level-item">
                           <button className="button is-info" onClick={props.post}>Submit</button>
                       </div>
                   </div>
               </nav>
       </article>
   )
}
export default Comment
