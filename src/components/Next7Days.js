import React from "react";
import ListRender from "./ListRender";

const Next7Days = ({list}) => {
  const date = new Date();


  return (
    <div id="next-list">
      <ListRender list={list.filter(list=>{
        if(date.getTime()>=list.date.getTime() && (date.getTime()-(7*1000*24*60*60))<list.date.getTime()){
          return list;
        }
      })}/>
    </div>
  );
};

export default Next7Days;
