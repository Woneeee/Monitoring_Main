import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/home/Home";
import { Company } from "./pages/about/Company";
import { Vision } from "./pages/about/Vision";
import { KeyValue } from "./pages/about/KeyValue";
import { History } from "./pages/about/History";
import { Software } from "./pages/business/Software";
import { Infra } from "./pages/business/Infra";
import { Government } from "./pages/business/Government";
import { Nixpack } from "./pages/solution/Nixpack";
import { Compressor } from "./pages/solution/Compressor";
import { SmartFactory } from "./pages/solution/SmartFactory";
import { Case } from "./pages/case/Case";
import { InquiryForm } from "./pages/notice/inquiry/InquiryForm";
import { InquiryList } from "./pages/notice/inquiry/InquiryList";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.company} element={<Company />} />
        <Route path={routes.vision} element={<Vision />}></Route>
        <Route path={routes.keyvalue} element={<KeyValue />}></Route>
        <Route path={routes.history} element={<History />}></Route>
        <Route path={routes.software} element={<Software />} />
        <Route path={routes.infra} element={<Infra />} />
        <Route path={routes.government} element={<Government />} />
        <Route path={routes.nixpack} element={<Nixpack />}></Route>
        <Route path={routes.compressor} element={<Compressor />}></Route>
        <Route path={routes.smartfactory} element={<SmartFactory />}></Route>
        <Route path={routes.case} element={<Case />}></Route>
        <Route path={routes.inquirylist} element={<InquiryList />}></Route>
        <Route path={routes.inquiryform} element={<InquiryForm />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
