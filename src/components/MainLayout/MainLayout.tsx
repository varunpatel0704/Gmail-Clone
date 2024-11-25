import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import styles from "./MainLayout.module.css";
import ToolBar from "../ToolBar/ToolBar";

function MainLayout() {
  return (
    <main className={styles.mainLayout}>
      <header>
        <TopBar />
      </header>

      <section className={styles.wrapper}>
        <aside className={styles.sideBar}>
          <SideBar />
        </aside>
        <main className={styles.contentContainer}>
          <div>
            <ToolBar />
          </div>
          <div className={styles.content}>
            {/* <Outlet />*/}            
          </div>
        </main>
        <aside className={styles.appBar}>
          <AppBar />
        </aside>
      </section>
    </main>
  );
}

export default MainLayout;
