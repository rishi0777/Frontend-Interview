import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        maxWidth: "1200px",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <TodoContainer />
    </div>
  );
}

export default App;
