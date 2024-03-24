import React, { useState } from "react";
import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaDownload, FaUpload } from "react-icons/fa";
import DropZone from "../components/DropZone";
import ImageProcessor from "../components/ImageProcessor";

const Index = () => {
  const [imageFiles, setImageFiles] = useState([]);

  const handleFileChange = (acceptedFiles) => {
    const pngJpegFiles = acceptedFiles.filter((file) => file.type === "image/png" || file.type === "image/jpeg");

    if (pngJpegFiles.length !== acceptedFiles.length) {
      alert("Only PNG and JPEG files are accepted.");
    }

    setImageFiles(pngJpegFiles);
  };

  const handleDownload = () => {
    console.log("Downloading compiled image...");
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Pixel Art Image Compiler
      </Heading>

      <VStack spacing={4} alignItems="stretch">
        <DropZone onDrop={handleFileChange} />

        <Button leftIcon={<FaUpload />} colorScheme="blue">
          Compile Images
        </Button>
      </VStack>

      <Flex wrap="wrap" justifyContent="center" marginTop={8}>
        {imageFiles.map((file, index) => (
          <Image key={index} src={URL.createObjectURL(file)} alt={`Uploaded ${index + 1}`} boxSize="64px" objectFit="cover" margin={1} />
        ))}
      </Flex>

      <ImageProcessor imageFiles={imageFiles} onProcessingComplete={(url) => console.log("Compiled image URL:", url)} />
    </Box>
  );
};

export default Index;
