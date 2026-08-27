import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LanguageProvider } from "./i18n/LanguageContext";
import { CartProvider } from "./context/CartContext";
import { ChatWidget } from "./components/ChatWidget";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import NotFoundPage from "./pages/NotFoundPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <CartProvider>
            <div className="grain-overlay" />
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <ChatWidget />
          </CartProvider>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
