import { Layout } from "./components/layout/Layout";
import { TodoContent } from "./components/TodoContent";

import "./global.css";
export function App() {
  return (
    <>
      <Layout>
        <TodoContent />
      </Layout>
    </>
  );
}
