import "./App.css";
import AddComments from "../component/AddComments";
import AddContents from "./../component/AddContents";
import AddImage from "../component/AddImage";
import Header from "../component/Header";
import Login from "../pages/Login";


function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <AddContents></AddContents>
      <AddComments></AddComments>
      <AddImage></AddImage> */}
      <Login></Login>
    </div>
  );

}

export default App;
