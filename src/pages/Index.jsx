import React, { useState } from "react";
import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaDownload, FaUpload } from "react-icons/fa";
import DropZone from "../components/DropZone";

const Index = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [compiledImage, setCompiledImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (acceptedFiles) => {
    setImageFiles(acceptedFiles);
  };

  const handleUpload = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulating image processing and compilation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Replace this with your actual image processing and compilation logic
      const compiledImageUrl = "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21waWxlZCUyMHBpeGVsJTIwYXJ0JTIwaW1hZ2VzfGVufDB8fHx8MTcxMTA3NzczNHww&ixlib=rb-4.0.3&q=80&w=1080";
      setCompiledImage(compiledImageUrl);
    } catch (error) {
      setError("An error occurred during image compilation.");
    }

    setIsLoading(false);
  };

  const handleDownload = () => {
    // Implement the logic to download the compiled image or ZIP file
    console.log("Downloading compiled image...");
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Pixel Art Image Compiler
      </Heading>

      <VStack spacing={4} alignItems="stretch">
        <DropZone onDrop={handleFileChange} />

        <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleUpload} isLoading={isLoading} loadingText="Compiling...">
          Compile Images
        </Button>

        {error && <Text color="red.500">{error}</Text>}

        {compiledImage && (
          <Box>
            <Image src={compiledImage} alt="Compiled Pixel Art" />
            <Button leftIcon={<FaDownload />} colorScheme="green" onClick={handleDownload} marginTop={4}>
              Download Compiled Image
            </Button>
          </Box>
        )}
      </VStack>

      <Flex wrap="wrap" justifyContent="center" marginTop={8}>
        {imageFiles.map((file, index) => (
          <Image key={index} src={URL.createObjectURL(file)} alt={`Uploaded ${index + 1}`} boxSize="64px" objectFit="cover" margin={1} />
        ))}
      </Flex>
    </Box>
  );
};

export default Index;
