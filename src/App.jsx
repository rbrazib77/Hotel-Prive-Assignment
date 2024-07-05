import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./RootLayout/RootLayout";


import ScrollToTop from "react-scroll-to-top";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <ScrollToTop smooth component={<p style={{ color: "white" }}>UP</p>} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
