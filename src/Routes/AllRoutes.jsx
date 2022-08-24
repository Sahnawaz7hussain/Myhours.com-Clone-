import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/how-it-works" element={<h1>How it Word</h1>} />
      <Route path="/use-cases" element={<h1>Use Cases</h1>} />
      <Route path="/pricing" element={<h1>Pricing Page</h1>} />
      <Route path="/support" element={<h1>Support Page</h1>} />
      <Route path="/signin" element={<h1>Sing in Page</h1>} />
      <Route path="/signup" element={<h1>Sing up Page</h1>} />
    </Routes>
  );
}
