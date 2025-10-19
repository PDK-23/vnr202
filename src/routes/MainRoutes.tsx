import NotFound from "@/components/NotFound";
import ClientLayout from "@/layouts/ClientLayout/ClientLayout";
import Home from "@/pages/client/home/Home";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router";

export default function MainRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
