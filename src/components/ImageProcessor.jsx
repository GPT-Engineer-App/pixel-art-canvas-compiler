import React from "react";

const ImageProcessor = ({ imageFiles, onProcessingComplete, onError }) => {
  const processImages = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const compiledImageUrl = "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21waWxlZCUyMHBpeGVsJTIwYXJ0JTIwaW1hZ2VzfGVufDB8fHx8MTcxMTA3NzczNHww&ixlib=rb-4.0.3&q=80&w=1080";
      onProcessingComplete(compiledImageUrl);
    } catch (error) {
      onError("An error occurred during image compilation.");
    }
  };

  return null;
};

export default ImageProcessor;
