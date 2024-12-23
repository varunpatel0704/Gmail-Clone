import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Inbox from './pages/Inbox';
import Sent from './pages/Sent';
import MailDetails from './pages/MailDetails';
import MailViewer from "./components/MailList/MailList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<MailViewer />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/email/:id" element={<MailDetails />} />
      </Route>
    </Routes>
  );
}

export default App;

