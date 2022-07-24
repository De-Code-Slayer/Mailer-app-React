import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Message from './components/Message';
import './App.css';
import Inbox from "./components/Inbox";


function App() {
  
  return (
    <Router>     
      <Routes>
         <Route path="/" element={  <Home /> } ></Route>
         <Route path="/inbox" element={ <Inbox /> } ></Route>
         <Route path="/message" element={ <Message /> } ></Route>
         
       </Routes>
    </Router>
        //  <Route path="/message" component={Message} />     
            // <Home />
          //  <Inbox messages={messages}/> 
    
  );
}

export default App;
