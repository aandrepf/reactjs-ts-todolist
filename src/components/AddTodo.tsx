import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./AddTodo.module.css";

interface AddTodoProps {
  todosTotal: number;
  onAddTodo: (todo: any) => void;
}

export function AddTodo({ todosTotal, onAddTodo }: AddTodoProps) {
  const [newTodoText, setNewTodoText] = useState("");

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault();

    onAddTodo({
      id: todosTotal + 1,
      description: newTodoText,
      isCompleted: false,
    });

    setNewTodoText("");
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTodoText(event.target.value);
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTodoEmpty = newTodoText.length === 0;

  return (
    <form className={styles.addTodoForm} onSubmit={handleCreateTodo}>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Adicione uma nova tarefa"
        value={newTodoText}
        onChange={handleNewTodoChange}
        onInvalid={handleNewTodoInvalid}
        required
      />
      <button type="submit" disabled={isNewTodoEmpty}>
        Criar <img src="/add.svg" alt="Add Todo" />
      </button>
    </form>
  );
}
