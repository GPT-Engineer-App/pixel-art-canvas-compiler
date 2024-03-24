import React, { useState } from "react";
import { Box, Button, Progress, Alert, AlertIcon, AlertDescription, AlertTitle } from "@chakra-ui/react";

const ImageProcessor = ({ imageFiles, onProcessingComplete }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [processingError, setProcessingError] = useState(null);
  const [compiledImageUrl, setCompiledImageUrl] = useState(null);

  const simulateImageAnalysis = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  const simulateImageCompilation = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("simulated_compiled_image.png");
      }, 2000);
    });
  };

  const processImages = async () => {
    setIsProcessing(true);
    setProcessingProgress(0);
    setProcessingError(null);

    try {
      await simulateImageAnalysis();
      setProcessingProgress(50);
      const url = await simulateImageCompilation();
      setCompiledImageUrl(url);
      onProcessingComplete(url);
    } catch (error) {
      setProcessingError(error.message);
    }

    setIsProcessing(false);
  };

  return (
    <Box>
      {!isProcessing && !compiledImageUrl && (
        <Button onClick={processImages} isDisabled={imageFiles.length === 0}>
          Process Images
        </Button>
      )}
      {isProcessing && <Progress value={processingProgress} size="sm" colorScheme="blue" />}
      {processingError && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Processing Error</AlertTitle>
          <AlertDescription>{processingError}</AlertDescription>
        </Alert>
      )}
      {compiledImageUrl && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Processing Complete!</AlertTitle>
          <AlertDescription>
            <Button onClick={() => console.log("Download compiled image")}>Download Compiled Image</Button>
          </AlertDescription>
        </Alert>
      )}
    </Box>
  );
};

export default ImageProcessor;
