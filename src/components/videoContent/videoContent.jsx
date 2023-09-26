import { Box, Stack } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "../index.jsx";

const VideoContent = ({ videos }) => {
  if (videos.length === 0) return <Loader />;
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={6}
    >
      {videos.map((item) => {
        return (
          <Box key={item.id.videoId}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard video={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default VideoContent;
