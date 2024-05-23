import { BrowserRouter, Route, Routes } from "react-router-dom";
import CertificatesPage from "./pages/certificatesPage";
import NotFoundPage from "./pages/notFoundPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <section className="w-full h-screen">
                <Routes>
                    <Route path="/" element={<CertificatesPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </section>
        </BrowserRouter>
    );
}

export default AppRouter;