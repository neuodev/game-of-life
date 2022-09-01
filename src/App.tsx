import { invoke } from "@tauri-apps/api";

function App() {
  const newUni = async () => {
    try {
      let universe = await invoke("new_universe", {
        width: 50,
        height: 50,
      });

      console.log(universe);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <button onClick={newUni}>New universe</button>
    </div>
  );
}

export default App;
