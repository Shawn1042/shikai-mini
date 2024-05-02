import React from 'react';

const LotsOfInfoPage= () => {
  return (
    <div className='entire-container'>
    <div className="lotscontainer">
        <h1>Sukuna vs Mahoraga (HD) <br />Coming Soon!</h1>
     {/* <p>
        Enjoy a few minutes of the Sukuna vs Mahoraga fight from Jujutsu Kaisen! This isn't the 
        entire fight, so I'll be posting the full extended version of the fight soon! This 
        video does include some extra scenes that weren't shown in the anime. <br /> Thank you to the MAPPA animators
        who made this incredibly animated fight between the King of Curses and the Divine General Mahoraga
      </p> */}

     <p>In the meantime, go watch <a href="/results/jujutsu%20kaisen">Jujutsu Kaisen!</a></p>

      <video className="player__video viewer" src="src/assets/dk4MOaBk0fReg1hp.mp4" controls></video>

    </div>
    </div>
  );
};

export default LotsOfInfoPage;
