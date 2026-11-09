import { AnimatePresence, MotionConfig } from "framer-motion";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Cursor } from "./components/Cursor";
import { MenuScreen } from "./components/MenuScreen";
import { MuteToggle } from "./components/MuteToggle";
import { StartScreen } from "./components/StartScreen";


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <MuteToggle />}
      <AnimatePresence mode="wait">
        <Routes location={location} // Everything past the start screen shares one key: the menu stays mounted and
          // channel previews / section pages layer over it.
          key={location.pathname === "/" ? "start" : "app"}>
          <Route path="/" element={<StartScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/channel/:id" element={<MenuScreen />} />
          <Route path="/channel/:id/start" element={<MenuScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <MotionConfig reducedMotion="user">
        <Cursor />
        <AnimatedRoutes />
      </MotionConfig>
    </HashRouter>
  );
}
