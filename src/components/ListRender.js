import React, { useState} from "react";

const Inbox = ({list, append}) => {
 const[newTask,changeTask]=useState(false);
 const[inputval,stateval]=useState("");
 const[inputdate,statedate]=useState('2022-09-27');
 function listadd(event){
  event.preventDefault();
  const lists=[...list,
    {
      number: list.lenght+1,
      title: inputval,
      date: new Date(inputdate)
    }];
    changeTask(!newTask)
  return append(lists);
  }
  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={()=>changeTask(!newTask)} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" value={inputval} onChange={event=>stateval(event.target.value)}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={(el)=>listadd(el)}>
              Add Task
            </button>
            <button className="new" onClick={()=>changeTask(!newTask)}>
              Cancel
            </button>
            <input
              type="date"
              Value={inputdate}
              id="date"
              onChange={event=>statedate(event.target.value)}
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {list.map((list) => {
          return (
            <div className="box" key={list.number}>
              <div className="task">
                {list.title} ({list.date.toLocaleDateString()})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
