import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ video }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "426px", md: "400px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${video?.snippet?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={video?.snippet?.thumbnails?.high?.url}
            alt={video?.snippet?.title}
            sx={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant={"h6"} fontWeight={"bold"}>
            {video?.snippet.title}
            <CheckCircle sx={{ fontSize: "14px", color: "grey", ml: "15px" }} />
          </Typography>
          {video?.statistics?.subscriberCount && (
            <Typography
              sx={{
                opacity: "0.6",
                fontSize: "15px",
                fontWeight: 500,
                color: "grey",
              }}
            >
              {parseInt(video?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
