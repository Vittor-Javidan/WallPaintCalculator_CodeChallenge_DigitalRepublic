import Output from "./Components/Output";
import Inputs from "./Components/Inputs";

export default function App() {
    return (
        <div className="App">
            <h1 className="App-Title">Wall Paint Calculator</h1>
            <form>
                <Inputs />
            </form>
            <Output />
        </div>
    );
}