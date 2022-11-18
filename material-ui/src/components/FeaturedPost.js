
import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./FeaturedPost.css";
import MuiClass from "./MuiClass";
const FeaturedPost = () => {
  const [addClass,setAddClass] = useState(false);
  const addClassHanlder = () => {
   addClass? setAddClass(false) : setAddClass(true)
  }
  return (
    <>
      <div className="cover">
        <Card>
          <CardContent className="text-container">
            <Typography className="text-title">
              title of a longer featured blog post
            </Typography>
            <Typography variant="h5">
              Multi lines of text that form the lede, informing new readers
              quickly and efficiently about what's most interesting in this
              post's content{" "}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="btn-cover">Read More...</Button>
          </CardActions>
        </Card>
      </div>
      <div className="section">
        <div className="div1">
          <h4>Featured Post</h4>
          <p>Nov 23</p>
          <p>
            lorem ipsum rneiu ceiwncuren jcewnqiucnreiuqnciunreiu
            jcreinqiucniurenui nruienvunncuvinruv uirnviue iurnviun rinvuir
            virenviu{" "}
          </p>
        </div>
        <div className="div2">
          <h4>Post Title</h4>
          <span>Jan 23</span>
          <p>
            lorem ipsum rneiu ceiwncuren jcewnqiucnreiuqnciunreiu
            jcreinqiucniurenui nruienvunncuvinruv uirnviue iurnviun rinvuir
            virenviu{" "}
          </p>
        </div>
      </div>
      <List >
        <ListItem className={addClass ? " ":"Mui-selected"}>
        Hello
      </ListItem>
      <Button onClick={addClassHanlder}>Add Class</Button>
      </List>
      <MuiClass/>
    </>
  );
};

export default FeaturedPost;
