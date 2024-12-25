import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import DisplayData from './components/DisplayData.jsx';
import User_Data from "./components/User_Data.jsx";
import Edit_User from "./components/Edit_Data.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Routes>
    {/* Parent Route with Header */}
    <Route path="/" element={<Header />}>
      {/* Child Routes */}
      <Route  path="/"  element={<DisplayData />} /> {/* Default route */}
      <Route path="/add" element={<User_Data />} />
      <Route path="/edit/:id" element={<Edit_User />} />
    </Route>
  </Routes>
</BrowserRouter>
);
