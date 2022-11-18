import {
  Button,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

const MuiClass = () => {
  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState(1);
  const [newItem, setNewItem] = useState("");
  const addItem = () => {
    let temp = [...items];
    let str = "item".concat(counter);
    temp.push(str);
    setNewItem(str);
    setItems([...temp]);
    setCounter(counter + 1);
  };

  return (
    <div>
      <Button onClick={addItem}>add item</Button>
      <List>
        {items.map((item) => (
          <ListItemButton
            onClick={(e) => {
              setNewItem(e.currentTarget.firstElementChild.innerText);
            }}
            selected={item === newItem}
            className="item-generate"
          >
            <ListItemText>{item}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default MuiClass;
