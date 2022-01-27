import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title="Choose the perfect design" img="https://static.toiimg.com/thumb/msid-77476691,width-1070,height-580,imgsize-156029,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"/>
      <Post title="Simply Recipes Less Stress. More Joy" img="https://c8.alamy.com/comp/W2H5DY/hindu-god-krishna-with-his-brother-balarama-watford-uk-W2H5DY.jpg"/>
      <Post title="What To Do In London" img="https://spiderimg.amarujala.com/cdn-cgi/image/width=1600,height=900,fit=cover,f=auto/assets/images/2016/12/13/krishna_1481636059.jpeg"/>
      <Post title="Recipes That Will Make You Crave More" img="https://images-na.ssl-images-amazon.com/images/I/71S+JAGZogL._RI_.jpg"/>
      <Post title="Shortcut Travel Guide to Manhattan" img="https://new-img.patrika.com/upload/2019/08/24/krishna.jpg"/>
      <Post title="Killer Actions to Boost Your Self-Confidence" img="https://rukminim1.flixcart.com/image/416/416/k4k7f680/poster/a/j/x/medium-little-krishna-wallpapers-canvas-print-art-medium-size-original-imafkjb5d2zxfbpz.jpeg?q=70"/>
    </Container>
  );
};

export default Feed;
