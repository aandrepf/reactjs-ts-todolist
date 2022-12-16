import { EmptyTodos } from "./EmptyTodos";
import { TodoCounters } from "./TodoCounters";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";

import styles from "./TodoContent.module.css";
import { useEffect, useState } from "react";

interface TodoList {
  id: number;
  description: string;
  isCompleted: boolean;
}

const todosList: TodoList[] = [
  {
    id: 1,
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isCompleted: false,
  },
  {
    id: 2,
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isCompleted: true,
  },
];

export function TodoContent() {
  const [todos, setTodos] = useState<TodoList[]>(todosList);
  const [todosConcluded, setTodosConcluded] = useState<number>(0);

  useEffect(() => {
    const concluded = todos.filter((todo) => todo.isCompleted).length;
    setTodosConcluded(concluded);
  }, [todos]);

  function addTodo(todo: any) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(todoId: number) {
    const todosWithoutDeletedOne = todos.filter((c) => c.id !== todoId);
    setTodos(todosWithoutDeletedOne);
  }

  function completeTodo(todoCompleted: any) {
    const objIndex = todos.findIndex((todo) => todo.id == todoCompleted.id);
    todos[objIndex].isCompleted = todoCompleted.isCompleted;

    const concluded = todos.filter((todo) => todo.isCompleted).length;
    setTodosConcluded(concluded);
  }

  return (
    <>
      <AddTodo onAddTodo={addTodo} todosTotal={todos.length} />
      <section className={styles.todoWrapper}>
        <TodoCounters quantity={todos.length} concluded={todosConcluded} />
        {todos.length === 0 ? (
          <EmptyTodos />
        ) : (
          todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                description={todo.description}
                isCompleted={todo.isCompleted}
                onDeleteTodo={deleteTodo}
                onCompleteTodo={completeTodo}
              />
            );
          })
        )}
      </section>
    </>
  );
}
