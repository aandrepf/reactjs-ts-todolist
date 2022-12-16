import { Trash } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import styles from "./Todo.module.css";

interface TodoProps {
  id: number;
  description: string;
  isCompleted: boolean;
  onCompleteTodo: (todo: any) => void;
  onDeleteTodo: (todoId: number) => void;
}

export function Todo({
  id,
  description,
  isCompleted,
  onCompleteTodo,
  onDeleteTodo,
}: TodoProps) {
  const [completed, setCompleted] = useState(isCompleted);

  function handleDeleteTodo() {
    onDeleteTodo(id);
  }

  function handleSetTodoCompleted(event: ChangeEvent<HTMLInputElement>) {
    event.persist();
    setCompleted(event.target.checked);
    isCompleted = event.target.checked;
    onCompleteTodo({ id, description, isCompleted });
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id={`checkbox-${id}`}
            checked={completed}
            onChange={handleSetTodoCompleted}
          />
          <label htmlFor={`checkbox-${id}`}></label>
        </div>

        <p className={completed ? styles.todoChecked : ""}>{description}</p>

        <button title="Deletar todo" onClick={handleDeleteTodo}>
          <Trash size={24} />
        </button>
      </div>
    </>
  );
}
