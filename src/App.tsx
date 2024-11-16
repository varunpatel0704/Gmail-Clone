import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Inbox from './pages/Inbox';
import Sent from './pages/Sent';
import MailDetails from './pages/MailDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/email/:id" element={<MailDetails />} />
      </Route>
    </Routes>
  );
}

export default App;

