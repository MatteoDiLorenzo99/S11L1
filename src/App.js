import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/favourites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
