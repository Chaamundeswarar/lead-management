import React from "react";
import "./Sidebar.css";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HouseIcon from '@mui/icons-material/House';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonIcon from '@mui/icons-material/Person';

import {Link} from "react-router-dom"

const Sidebar = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div  className="App" id="app" style={{ height: "100vh", display: "flex" }}>
      <ProSidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem className="Side" icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem className="Side" icon={<HomeOutlinedIcon />}>HomePage</MenuItem>
          <MenuItem className="Side" icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem className="Side" icon={<HouseIcon/>}>Property</MenuItem>
          <MenuItem className="Side" icon={<ContactsOutlinedIcon />}>Leads</MenuItem>
          <MenuItem className="Side" icon={<PersonIcon/>}> AgentsManagement</MenuItem>
          <MenuItem className="Side" icon={<CalendarTodayOutlinedIcon />}><Link to="/calender">Calendar</Link></MenuItem>
      
          </Menu>
      </ProSidebar>
      
      
      <main>
        <h1 className="Header">
          Welcome to Admin Panel
        </h1>
      </main>
    </div>
  );
};

export default Sidebar;
