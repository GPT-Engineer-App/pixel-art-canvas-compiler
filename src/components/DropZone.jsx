import React, { useCallback } from "react";
import { Box, Text } from "@chakra-ui/react";

const DropZone = ({ onDrop }) => {
  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      const files = Array.from(event.dataTransfer.files);
      onDrop(files);
    },
    [onDrop],
  );

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <Box onClick={() => document.querySelector('input[type="file"]').click()} onDrop={handleDrop} onDragOver={handleDragOver} borderWidth={2} borderStyle="dashed" borderColor="gray.300" borderRadius="md" p={4} textAlign="center" cursor="pointer">
      <Text>Drag and drop files here, or click to select files</Text>
      <input type="file" multiple style={{ display: "none" }} onChange={(e) => onDrop(Array.from(e.target.files))} />
    </Box>
  );
};

export default DropZone;
