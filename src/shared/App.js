import "./App.css";
import AddComments from "../component/AddComments";
import AddContents from "./../component/AddContents";
import AddImage from "../component/AddImage";
import Header from "../component/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AddContents></AddContents>
      <AddComments></AddComments>
      <AddImage></AddImage>
    </div>
  );
}

export default App;
