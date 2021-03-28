import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./../App.scss";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {voted, error} from "../redux";

const useStyles = makeStyles({
  root: {
    width: "30%",
    margin: "10px",
    float: "left",
    textAlign: "center",
  },
});

export default function CadCards(props) {
  const user = useSelector(state => state.auth.user);
  const classes = useStyles();
  const dispatch = useDispatch();

  async function handleClick(candidate, user) {
    try {
      const res = await axios.put(
        `http://localhost:9000/api/user/like/${user}/${candidate}`
      );

      console.log(res);
      updateState();
    } catch (e) {
      dispatch(error(e.response.data.msg));

      console.log(e.response.data.msg);
    }
  }
  function updateState() {
    return dispatch(voted());
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="CAD-01"
            height="280"
            image="./images/CAD_01.png"
            title="CAD_01"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Jack
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              I don't know what year is it feels like there is a lot of pressure
              on me
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => handleClick("603b2bb7d0932205ac189536", user)}
            id="CAD"
            value="603b2bb7d0932205ac189536"
            variant="contained"
            color="primary"
          >
            VOTE
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="CAD"
            height="280"
            image="./images/CAD_02.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Robert
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              I am the most liked candidate among kids hope they can vote too
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => handleClick("603b415b896f54062aaa8bbc", user)}
            variant="contained"
            color="primary"
          >
            VOTE
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="CAD-03"
            height="280"
            image="./images/CAD_03.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Daniel
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              Promise to make the city full of peoples(animals) like myself
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => handleClick("603b41af9aa9ad063342ba7b", user)}
            id="CAD"
            value="6055cb78f4a96759c649f110"
            variant="contained"
            color="primary"
          >
            VOTE
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
