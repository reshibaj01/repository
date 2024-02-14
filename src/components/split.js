import React from 'react';

const Split = () => {
  return (
    <div>
        <div className="split" style={{display:"flex",flexDirection:"row",padding:"20px"}}>
          <img style={{height:"40vh"}} src="/images/pic2.jpg" alt="" />
          <div className="spliting">
          <p >Hubspot cms</p>
          <h1 style={{fontSize:"30px"}}>Build your company using drag and drop</h1>

          <p>It is a long established fact that a reader will be distracted when looking at its layout.
             The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>

             <p>It is a long established fact that a reader will be distracted when looking at its layout.
             The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>

          <ul style={{display:'flex',flexDirection:"column"}}>
            <li>Lorem Ipsum is simply  text  </li>
          <li>Lorem Ipsum is simply  text</li>
            <li> Lorem Ipsum is simply  text </li>
           </ul>
           </div>
        </div>
    </div>
  )
}

export default Split