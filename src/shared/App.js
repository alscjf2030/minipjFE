import "./App.css";
import AddComments from "../component/AddComments";
import AddContents from "./../component/AddContents";
import AddImage from "../component/AddImage";

function App() {
  return (
    <div className="App">
      <AddContents></AddContents>
      <AddComments></AddComments>
      <AddImage></AddImage>
    </div>
  );

}

export default App;
