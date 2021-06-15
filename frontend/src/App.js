import "./App.css";
import { Link, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import SocialFeed from "./Components/SocialFeed";
import SignIn from "./Components/SignIn";
import RecordingBooth from "./Components/RecordingBooth";
import DevNotes from "./Components/DevNotes";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Social-Feed">Social Feed</Link>
        <Link to="/Recording-Booth">Recording Booth</Link>
        <Link to="/Sign-In">Sign In</Link>
      </nav>
      <Route path="/">
        <DevNotes />
      </Route>
      <Route path="/Profile">
        <Profile />
      </Route>
      <Route path="/Recording-Booth">
        <RecordingBooth />
      </Route>
      <Route path="/Social-Feed">
        <SocialFeed />
      </Route>
      <Route path="/Sign-In">
        <SignIn />
      </Route>
    </div>
  );
}

export default App;
