import './App.css';
import Index from "./components/Page";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { OverView } from './components/Page/overview/overview';
import { SignUp } from './components/Page/sign_up/sign_up';

const App = () => {
    return(
        <Router>
            <Routes>
            <Route  exact path='/' element={<Index />} />
            <Route  exact path='/home' element={<Index />} />
            <Route  exact path='/overview' element={<OverView />} />
            <Route  exact path='/sign_up' element={< SignUp />} />


            </Routes>
        </Router>
    )
}
export default App;
