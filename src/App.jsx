import "./App.css";
import Header_title from "./Layout/Header/Header_title";
import Tasks from "./Components/Tasks/Tasks.jsx";
import { Provider } from "react-redux";
import store  from '../src/redux/index.js'


function App() {
  return (  
    <>
      <Provider store={store}>
        <div className="centerer_page">
          <Header_title />
          <Tasks />
        </div>
      </Provider>
    </>
  );
}

export default App;
