import React from 'react'
import TopBar from './TopBar';
import SideBar from './SideBar';
import MailViewer from './MailViewer';
import AppBar from './AppBar/AppBar'
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <main>
      <TopBar/>
      <SideBar/>
      <Outlet/>
      <MailViewer/>
      <AppBar/>
    </main>
  )
}

export default MainLayout