import { Avatar, AvatarGroup, Box, } from "@chakra-ui/react";
import React from "react";

const AvatarCollage = () => {
  const avatarImages = ["https://framerusercontent.com/images/2fFFaPF5ZAByC4EYJKR5YVw5yw.png", "https://framerusercontent.com/images/6uYgdEC1jGe6urbMtA9d0dgg.png", "https://framerusercontent.com/images/Kg5LB2O8KkYlQ1azwquQKxtHnrM.png", "https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"];

  return (
    <Box>
       <AvatarGroup spacing="-2" max={5}>
        {avatarImages.map((imageName, index) => (
          <Avatar
            key={index}
            name={`avatar-${index}`}
            src={imageName}
            size="md"
            position="relative"
            zIndex={index + 1}
            left={`-${index * 10}px`} // Adjust the value to control the overlap
          />
        ))}
      </AvatarGroup>
    </Box>
  );
};

export default AvatarCollage;