import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopOnNav from "@/components/ScrollToTopOnNav";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Treatments from "./pages/Treatments";
import Fees from "./pages/Fees";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnNav />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
 </HelmetProvider>
);

export default App;
