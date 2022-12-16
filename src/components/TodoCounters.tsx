import styles from "./TodoCounters.module.css";

interface TodoCountersProps {
  quantity: number;
  concluded: number;
}
export function TodoCounters({ quantity, concluded }: TodoCountersProps) {
  return (
    <div className={styles.todoCounters}>
      <p>
        Tarefas criadas <span>{quantity}</span>
      </p>
      <p>
        Concluídas{" "}
        <span>{concluded ? `${concluded} de ${quantity}` : concluded}</span>
      </p>
    </div>
  );
}
