import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { color } from "../../constans/color.js";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  // console.log(video);
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "440px", md: "400px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${video?.id?.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            width: { xs: "100%", sm: "440px", md: "400px" },
            height: "180px",
          }}
        />
      </Link>
      <CardContent
        sx={{
          background: color.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/video/${video?.id?.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: "0.4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant={"subtitle1"} fontWeight={"bold"}>
            {video?.snippet.title.slice(0, 50) + "..."}
          </Typography>

          <Typography variant="subtitle2" sx={{ opacity: "0.6" }}>
            {video?.snippet.description.slice(0, 70)}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"5px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant={"subtitle2"}>
              {video?.snippet.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
