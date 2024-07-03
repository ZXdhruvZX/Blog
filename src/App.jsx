import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import NoPage from "./pages/nopage/NoPage";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import CreateBlog from "./pages/admin/createBlog/CreateBlog";
import { MyStateProvider } from "./context/data/MyContext";
import { Toaster } from "react-hot-toast";
import MyState from "./context/data/MyState";

function App() {
  return (
    <MyStateProvider>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/allblogs" element={<AllBlogs />} />
            <Route path="/bloginfo/:id" element={<BlogInfo />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutesForAdmin>
                  <Dashboard />
                </ProtectedRoutesForAdmin>
              }
            />
            <Route
              path="/createblog"
              element={
                <ProtectedRoutesForAdmin>
                  <CreateBlog />
                </ProtectedRoutesForAdmin>
              }
            />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </MyStateProvider>
  );
}

export default App;

const ProtectedRoutesForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("admin"));
  if (user && user.email === "testuser@gmail.com") {
    return children;
  } else {
    return <Navigate to="/adminlogin" />;
  }
};
