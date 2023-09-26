import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../services/api.service.js";
import ChannelCard from "../channelCard/channelCard.jsx";
import { Loader, VideoContent } from "../index.jsx";
const Channel = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState({}); // [1]
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          "channels?part=snippet,statistics&id=" + id
        );
        setChannelDetail(data.items[0]); // 2
        const dataVideo = await ApiService.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setChannelVideos(dataVideo.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);

  if (!channelDetail?.snippet) return <Loader />;
  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"200px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCard video={channelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={"90%"}>
        <VideoContent videos={channelVideos} />
      </Container>
    </Box>
  );
};

export default Channel;
