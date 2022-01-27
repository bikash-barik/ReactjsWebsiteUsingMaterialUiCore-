import {
  Link,
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Bikash Barik"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="I Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="K Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="A Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="S Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />

        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
        <ImageListItem>
          <img
            src="https://www.dailypioneer.com/uploads/2021/story/images/big/in-krishna---s-love-2021-04-18.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://www.orissapost.com/wp-content/uploads/2019/08/top-pics-of-Krishna-500x500.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://content3.jdmagicbox.com/comp/coimbatore/t8/0422px422.x422.170120171621.i9t8/catalogue/sri-krishna-finance-peelamedu-coimbatore-finance-companies-3283qfu.jpg?clr=273f3f"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sBHMO7O-O3SuZ3RWUDQ3GRzu4uGWk-ja1Q&usqp=CAU"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://spiderimg.amarujala.com/cdn-cgi/image/width=1600,height=900,fit=cover,f=auto/assets/images/2016/12/13/krishna_1481636059.jpeg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/956/955/739/3d-anime-bal-radhe-krishna-cute-wallpaper-preview.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Divider flexItem style={{marginBottom:5}}/>
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Life
      </Link>
    </Container>
  );
};

export default Rightbar;
