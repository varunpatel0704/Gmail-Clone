import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <header>
        <TopBar />
      </header>
      
      <section className="wrapper">
        <aside className="side-bar">
          <SideBar />
        </aside>
        <main className="content">
          <Outlet />
        </main>
        <aside className="app-bar">
          <AppBar />
        </aside>
      </section>
    </div>
  );
}

export default MainLayout;
