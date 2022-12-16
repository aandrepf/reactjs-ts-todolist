import styles from "./EmptyTodos.module.css";

export function EmptyTodos() {
  return (
    <div className={styles.emptyTodoList}>
      <img src="/clipboard.svg" alt="Clipboard to Empty Todo" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
