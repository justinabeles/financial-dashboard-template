"use client";

import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const LottiePlayer: React.FC = () => {
    return (
      <div>
        <Player
            autoplay
            loop
            src={"/images/lottie/profile.json"}
            style={{ height: '300px', width: '300px' }}
        >
        </Player>
      </div>
    );
  };

export default LottiePlayer;
