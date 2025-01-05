import { Outlet } from "react-router-dom";
import Compose from "../../pages/Compose/Compose";
import AppBar from "../AppBar/AppBar";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import styles from "./MainLayout.module.css";

import AppDrawer from "../AppDrawer/AppDrawer";
import { useContext, useRef } from "react";
import { DrawerContext } from "../../contexts/DrawerProvider";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Settings from "../Settings/Settings";
import { SettingsContext } from "../../contexts/SettingsProvider";

function MainLayout() {
  const { showAppDrawer, setShowAppDrawer } = useContext(DrawerContext);
  const { showSettings } = useContext(SettingsContext);
  const drawerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(drawerRef, () => setShowAppDrawer(false));

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
        {showSettings && <aside>
          <Settings />
        </aside>}

        {/* Appbar */}
        <aside className={styles.appBar}>
          <AppBar />
        </aside>

        {/* App drawer */}
        <div
          className={`${styles.appDrawer} ${
            showAppDrawer && styles.showDrawer
          }`}
          ref={drawerRef}
        >
          <AppDrawer />
        </div>
      </section>
      <Compose />
    </main>
  );
}

export default MainLayout;
