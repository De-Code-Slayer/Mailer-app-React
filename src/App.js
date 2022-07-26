import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Message from './Pages/Message';
import './App.css';
import Inbox from "./Pages/Inbox";
import AppContainer from "./components/AppContainer";
import UserDataContext from "./ContextProviders";


function App() {

    return (
        <AppContainer>
            <UserDataContext>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} ></Route>
                        <Route path="/inbox" element={<Inbox />} ></Route>
                        <Route path="/message" element={<Message />} ></Route>

                    </Routes>
                </Router>
                {/* //  <Route path="/message" component={Message} />
            // <Home />
          //  <Inbox messages={messages} /> */}
            </UserDataContext>
        </AppContainer>
    );
}

export default App;
