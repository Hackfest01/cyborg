import './App.css';
import Index from "./components/Page";
import {BrowserRouter as Router} from "react-router-dom";

const App = () => {
    return(
        <Router>
            <Index/>
        </Router>
    )
}
export default App;
