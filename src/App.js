//libraries

//components
import DGXDropdown from "./components/DGXDropdown";
import DGXResult from "./components/DGXResult";

//styles
import "./App.css";
import "./assets/styles/common.css";
import "./assets/styles/font.css";

//context
import { DropdownProvider } from "./context";

//images
import digiIcon from "./assets/pixel-arts/pixel-express.png";

//apis
import itemList from "mock/drop-items.json";
import defaultItem from "mock/form-data.json";

function App() {
  //renderer
  return (
    <DropdownProvider>
      <div id="app" className="flex">
        <section className="container">
          <img className="logo" alt="Express logo" src={digiIcon} />
          <div className="mt">
            <DGXDropdown list={itemList} defaultItem={defaultItem} />
          </div>
          <DGXResult />
        </section>
      </div>
    </DropdownProvider>
  );
}

export default App;
