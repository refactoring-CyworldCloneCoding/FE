import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "../pages/Join";
import Main from "../pages/Main";
import MiniHome from "../pages/MiniHome";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/minihome/:myHomeId" element={<MiniHome />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
