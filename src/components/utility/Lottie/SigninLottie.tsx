"use client";

import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const LottiePlayer: React.FC = () => {
    return (
      <div>
        <Player
            autoplay
            loop
            src={"/images/lottie/signin.json"}
            style={{ height: '500px', width: '500px' }}
        >
        </Player>
      </div>
    );
  };

export default LottiePlayer;
