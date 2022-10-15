import './App.css';
import Index from "./components/Page";
import { BrowserRouter as Router} from "react-router-dom";
// import AuthenticateElement from "./components/Page/AuthenticateElement";

const App = () => {
    return(
        <Router>
            <Index/>
            {/*<AuthenticateElement/>*/}
        </Router>
    )
}
export default App;
