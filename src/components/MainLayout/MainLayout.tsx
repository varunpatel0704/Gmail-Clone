import { useState } from "react";
import { Outlet } from "react-router-dom";
import Compose from "../../pages/Compose/Compose";
import AppBar from "../AppBar/AppBar";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import styles from "./MainLayout.module.css";
import { ToogleProvider } from "../../contexts/ToogleProvider";

function MainLayout() {
  const [visible, setVisible] = useState(true); // to control the compose component

  return (
    <ToogleProvider>
      <main className={styles.mainLayout}>
        <header>
          <TopBar />
        </header>

        <section className={styles.wrapper}>
          <aside className={styles.sideBar}>
            <SideBar />
          </aside>

          <main className={styles.container}>
            <Outlet />
          </main>

          <aside className={styles.appBar}>
            <AppBar />
          </aside>
        </section>
        <Compose visible={visible} setVisible={setVisible} />
      </main>
    </ToogleProvider>
  );
}

export default MainLayout;
