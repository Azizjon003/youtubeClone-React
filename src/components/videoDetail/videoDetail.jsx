import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../services/api.service.js";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";

import ReactPlayer from "react-player";

import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import VideoContent from "../videoContent/videoContent.jsx";
import Loader from "../loader/loader.jsx";

const VideoDetail = () => {
  const [video, setVideo] = useState({}); // [1
  const [relatedVideo, setRelatedVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          "videos?part=snippet,statistics&id=" + id
        );
        setVideo(data.items[0]); // 2
        const relatedData = await ApiService.fetching(
          "search?part=snippet&relatedToVideoId=" +
            id +
            "&type=video&maxResults=10"
        );
        console.log(relatedData.items);
        setRelatedVideo(relatedData.items);
      } catch (err) {
        console.log(err);
      }
    };
    console.log("ishla");
    getData();
  }, [id]);

  // const {
  //   snippet: { title, channelId, channelTitle, description, tags, thumbnails },
  //   statistics: { viewCount, likeCount, commentCount },
  // } = video;
  if (!video?.snippet) return <Loader />;
  if (relatedVideo.length === 0) <Loader />;
  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"}>
        <Box width={"75%"}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          {video?.snippet?.tags?.map((item, key) => {
            return (
              <Chip
                label={item}
                key={key}
                sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
                deleteIcon={<Tag />}
                onDelete={() => {}}
                variant={"outlined"}
              />
            );
          })}

          <Typography variant="h5" fontWeight={"bold"} p={2}>
            {video?.snippet?.title}
          </Typography>
          <Typography variant="subtitle1" p={2} sx={{ opacity: ".7" }}>
            {video?.snippet?.description?.slice(0, 200)}
          </Typography>

          <Stack direction="row" gap="20px" alignItems="center" py={1} px={2}>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <Visibility />
              {parseInt(video?.statistics?.viewCount).toLocaleString()} views
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <FavoriteOutlined />
              {parseInt(video?.statistics?.likeCount).toLocaleString()} likes
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <MarkChatRead />
              {parseInt(video?.statistics?.commentCount).toLocaleString()}{" "}
              comment
            </Stack>
          </Stack>
          <Stack direction="row" py={1} px={2}>
            <Link to={`/channel/${video?.snippet?.channelId}`}>
              <Stack
                direction="row"
                alignItems="center"
                gap="5px"
                marginTop="5px"
              >
                <Avatar
                  alt={video.snippet?.channelTitle}
                  src={video.snippet?.thumbnails?.default?.url}
                />
                <Typography variant="subtitle2" color="gray">
                  {video.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          overflow={"scroll"}
          maxHeight={"120vh"}
        >
          <VideoContent videos={relatedVideo} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
