import "./Styles/App.css";
import { SecondTable } from "./Components/secondTable";
import { DateRangePicker } from "./Components/dateRangePicker";

function App() {
  return (
    <div className="App">
      <DateRangePicker />
      <SecondTable />
    </div>
  );
}

export default App;
