import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Layout from "./layout/Layout";
import Newest from "./components/Newest";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/newest" element={<Newest />} />
          <Route path="/patients" element={<div>Overview Page</div>} />
          <Route path="/schedule" element={<div>Schedule Page</div>} />
          <Route path="/message" element={<div>Message Page</div>} />
          <Route path="/transactions" element={<div>Transactions Page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
