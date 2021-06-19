//https://www.googleapis.com/youtube/v3/search?key=AIzaSyCmPCOUVecFd37gsKfCFjc25zYfPQsk7wI&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6

//AIzaSyCmPCOUVecFd37gsKfCFjc25zYfPQsk7wI  key

//https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCmPCOUVecFd37gsKfCFjc25zYfPQsk7wI&forUsername=Apple&part=id

import logo from "./logo.svg";
import "./App.css";
import AppleHeader from "./Components/Final-apple/AppleHeader";
import Alert from "./Components/Final-apple/Alert";
import Iphone12 from "./Components/Final-apple/Iphone12";
import Iphone12pro from "./Components/Final-apple/Iphone12pro";
import Watch from "./Components/Final-apple/Watch";
import Fourth from "./Components/Final-apple/Fourth";
import Fifth from "./Components/Final-apple/Fifth";
import Sixth from "./Components/Final-apple/Sixth";
import Footer from "./Components/Final-apple/Footer";
import Youtube from "./Components/Final-apple/Youtube"

function App() {
  return (
    <div className="App">
      <AppleHeader />
      <Alert />
      <Iphone12 />
      <Iphone12pro />
      <Watch />
      <Fourth />
      <Fifth />
      <Sixth />
      <Youtube />
      <Footer />
    </div>
  );
}

export default App;
