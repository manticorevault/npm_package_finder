import { Provider } from "react-redux";
import { store } from "../state";
import RepositoresList from "./RepositoresList";

const App = () => {
    return <Provider store={ store }>
        <div>
            <h1> 
                Search for a Package 
                <RepositoriesList />
            </h1>
        </div>
    </Provider>
}

export default App;