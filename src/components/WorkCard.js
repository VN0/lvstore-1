import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  CardMedia,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 280,
  },
});
const WorkCard = ({ name, desc, downloadLink, gitLink }) => {
  const classes = useStyles();
  const gitHubButton = gitLink !== "" && (
    <Button
      href={gitLink}
      size="small"
      target="_blank"
      color="default"
      startIcon={<GitHubIcon />}
    >
      Github
    </Button>
  );
  return (
    <Card elevation="10" className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../images/${name}.png`)}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          href={downloadLink}
          size="small"
          target="_blank"
          color="primary"
          startIcon={<GetAppIcon />}
        >
          Download
        </Button>
        {gitHubButton}
      </CardActions>
    </Card>
  );
};

export default WorkCard;
