import { Outlet } from "react-router-dom";
import Compose from "../../pages/Compose/Compose";
import AppBar from "../AppBar/AppBar";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import styles from "./MainLayout.module.css";

import { useContext } from "react";
import { SettingsContext } from "../../contexts/SettingsProvider";
import Settings from "../Settings/Settings";

function MainLayout() {
  const { showSettings } = useContext(SettingsContext);

  return (
    <main className={styles.mainLayout}>
      <header>
        <TopBar />
      </header>

      <section className={styles.wrapper}>
        {/* Sidebar */}
        <aside className={styles.sideBar}>
          <SideBar />
        </aside>

        {/* Content */}
        <main className={styles.container}>
          <Outlet />
        </main>

        {/* Settings Pane */}
        {showSettings && (
          <aside>
            <Settings />
          </aside>
        )}

        {/* Appbar */}
        <aside className={styles.appBar}>
          <AppBar />
        </aside>

        {/* App drawer */}
        {/* <div
          className={`${styles.appDrawer} ${
            showAppDrawer && styles.showDrawer
          }`}
          ref={drawerRef}
        >
          <AppDrawer />
        </div> */}
      </section>
      <Compose />
    </main>
  );
}

export default MainLayout;
