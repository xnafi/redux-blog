import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Layout from "./layout/Layout";
import AllBlogs from "./components/AllBlogs";
import { Saved } from "./components/Saved";
import BlogDetails from "./components/BlogDetails";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllBlogs />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/schedule" element={<div>Schedule Page</div>} />
          <Route path="/message" element={<div>Message Page</div>} />
          <Route path="/transactions" element={<div>Transactions Page</div>} />
        </Route>
        <Route path="/blogs/:blogId" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
