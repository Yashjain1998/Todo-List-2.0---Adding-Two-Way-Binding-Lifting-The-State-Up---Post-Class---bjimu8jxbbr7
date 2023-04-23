import React from "react";
import ListRender from "./ListRender";

const Today = ({list}) => {
  const date = new Date();
  
  return (
    <div id="today-list">
      <ListRender list={list.filter(list=>(list.date.toLocaleDateString()===date.toLocaleDateString()))} />
    </div>
  );
};

export default Today;
