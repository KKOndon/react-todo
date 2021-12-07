import React from "react";

export const InCompleteTodo = (props) => {
  const { incompleteTodos, onClickFin, onClickDel } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickFin(index)}>完了</button>
              <button onClick={() => onClickDel(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
