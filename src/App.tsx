import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Inbox from "./pages/Inbox/Inbox";
import MailDetails from "./pages/MailDetails/MailDetails";
import Spam from "./pages/Spam/Spam";
import Bin from "./pages/Bin/Bin";
import Sent from "./pages/Sent/Sent";
import Starred from "./pages/Starred/Starred";
import Drafts from "./pages/Drafts/Drafts";
import Snoozed from "./pages/Snoozed/Snoozed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="inbox" index element={<Inbox />} />

        <Route path="sent" element={<Sent />} />

        <Route path="starred" element={<Starred />} />

        <Route path="snoozed" element={<Snoozed />} />

        <Route path="drafts" element={<Drafts />} />

        <Route path="spam" element={<Spam />} />

        <Route path="bin" element={<Bin />} />

        <Route path="email/:id" element={<MailDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
