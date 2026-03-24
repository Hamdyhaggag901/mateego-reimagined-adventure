import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import HomePage from "@/pages/HomePage";
import JourneysPage from "@/pages/JourneysPage";
import SingleJourneyPage from "@/pages/SingleJourneyPage";
import TripPlannerPage from "@/pages/TripPlannerPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import DestinationPage from "@/pages/DestinationPage";
import ArticlePage from "@/pages/ArticlePage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journeys" element={<JourneysPage />} />
          <Route path="/journey/:id" element={<SingleJourneyPage />} />
          <Route path="/trip-planner" element={<TripPlannerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/destination/:slug" element={<DestinationPage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <StickyBottomBar />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
