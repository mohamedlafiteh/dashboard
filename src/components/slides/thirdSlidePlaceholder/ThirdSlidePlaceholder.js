import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { flexbox } from "@material-ui/system";
import imgBackground from "./water3.jpg";

const useStyles = makeStyles({
  card: {
    maxWidth: flexbox
  },
  media: {
    height: 650
  }
});

export default function ThirdSlidePlaceholder() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgBackground}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            Hello From Slide Three Placeholder
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
