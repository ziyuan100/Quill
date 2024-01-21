import './App.css'
import ChatTab from './Components/ChatTab';
import FriendsTab from './Components/FriendsTab';
import Navbar from './Components/Navbar';

function App() {

  return (
    <div>
      <Navbar />
      <FriendsTab />
      <ChatTab />
    </div>
  )
}

export default App
