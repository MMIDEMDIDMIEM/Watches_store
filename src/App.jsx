import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import AddProduct from "./dashboard/AddProduct";
import EditProduct from "./dashboard/EditProduct";
import ProductDetails from "./Home/section/ProductDetails";
import Orders from "./dashboard/Orders";
import AdminRoute from "./components/ProdectedRoute";
import Login from "./Home/Login";
import { Toaster } from "react-hot-toast";
import BreadCrambs from "./components/BreadCrambs";
import Footer from "./components/Footer";

function App() {
  return (
  <>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />

        {/* صفحة تسجيل الدخول */}
        <Route path="/login" element={<Login />} />

        {/* صفحات الأدمن المحمية */}
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <AdminRoute>
              <Orders />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer/>
  </>
   
  );
}

export default App;
