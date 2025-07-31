import React from 'react';
import '../CSS/RightCard.css';


const RightCard = ({data}) => {
  console.log(data);
  return (
    <div className='Card-container'>

      <div>

        <p>
          <span> <img src="" alt="" /> </span>
          In The Riff by Eric Dockett
        </p>
      </div>
      <h3>Ozzy Orzbone : The Legeacy of Madman</h3>
      <p><span>star</span> date</p>
    </div>

  )
}

export default RightCard