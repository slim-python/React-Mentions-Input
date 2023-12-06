import "./App.css";
import MentionsInput from "./components/MentionsInput";
import { UsersList } from "./components/utils";
function App() {
  return (
    <>
      <main className=" ">
        <MentionsInput data={UsersList} trigger="@" />
      </main>
    </>
  );
}

export default App;
