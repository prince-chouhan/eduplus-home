import React from 'react';

const VideoPlayer = () => (
  <div className="w-full">
    <video
      className="w-full h-auto rounded-xl shadow-lg"
      controls
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/eduplus-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoPlayer;
