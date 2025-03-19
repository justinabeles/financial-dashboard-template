"use client";

import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const LottiePlayer: React.FC = () => {
    return (
      <div className="col-span-12 xl:col-span-4 text-center">
        <Player
            autoplay
            loop
            src={"/images/lottie/premium.json"}
        >
        </Player>
        <h1 className="mb-2 font-semibold text-black dark:text-white">
            Upgrade for more features!
        </h1>
        <button
            className="rounded-md bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
            type="submit"
        >
            Get now
        </button>
      </div>
    );
  };

export default LottiePlayer;
