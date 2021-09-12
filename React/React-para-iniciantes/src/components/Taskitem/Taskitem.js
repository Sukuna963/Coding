import React, { useState } from "react";
import ProtoTypes from "prop-types";

import "./Taskitem.css";

export default function Taskitem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeleteTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const ontitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const oneKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };
  if (isEditing) {
    return (
      <div claddName="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={ontitleChange}
          onKeyPress={oneKeyPress}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>;
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completo">Completo</option>
        </select>
      </div>
    );
  }
}

Taskitem.prototype = {
  id: ProtoTypes.number.isRequired,
  title: ProtoTypes.string.isRequired,
  taskState: ProtoTypes.string.isRequired
};
