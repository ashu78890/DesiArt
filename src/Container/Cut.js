import React, { useRef, useEffect } from 'react';

const ImageCut = ({ imageUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    // Load your image
    img.onload = () => {
      
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0);

      // Define the paths to cut the image
      ctx.beginPath();
      ctx.moveTo(50, 50); // Starting point
      ctx.lineTo(100, 20); // Draw a line
      ctx.lineTo(200, 100); // Draw another line
      ctx.closePath(); // Close the path

      // Clip the image based on the path
      ctx.clip();

      // Draw the clipped image
      ctx.drawImage(img, 0, 0);
    };

    // Set the image source
    // "./Picture.jpg" = imageUrl;
  }, [imageUrl]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ImageCut;
