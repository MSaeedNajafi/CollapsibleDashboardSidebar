import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const SideBar = ({ setCurrentPage, toggleSideCollapsed, sideCollapsed }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Sidebar style={{ height: "100vh", border: 0 }} collapsed={sideCollapsed}>
        <Menu
          menuItemStyles={{
            button: ({ active }) => {
              return {
                backgroundColor: active ? "white" : null,
                // padding: 20,
              };
            },
          }}
          active
        >
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              toggleSideCollapsed();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Admin</h2>
          </MenuItem>
          <MenuItem
            icon={<HomeOutlinedIcon />}
            onClick={() => {
              handlePageChange("home");
            }}
            component={<Link to="/" />}
            active={window.location.pathname === "/"}
            // style={{ margin: 20, padding: 20 }}
          >
            Home
          </MenuItem>
          <MenuItem
            icon={<PeopleOutlinedIcon />}
            onClick={() => {
              handlePageChange("team");
            }}
            component={<Link to="/team" />}
            active={window.location.pathname === "/team"}
          >
            Team
          </MenuItem>
          <MenuItem
            icon={<ContactsOutlinedIcon />}
            onClick={() => {
              handlePageChange("contacts");
            }}
            component={<Link to="/contacts" />}
            active={window.location.pathname === "/contacts"}
          >
            Contacts
          </MenuItem>
          <MenuItem
            icon={<ReceiptOutlinedIcon />}
            onClick={() => {
              handlePageChange("profile");
            }}
            component={<Link to="/profile" />}
            active={window.location.pathname === "/profile"}
          >
            Profile
          </MenuItem>
          <MenuItem
            icon={<HelpOutlineOutlinedIcon />}
            onClick={() => {
              handlePageChange("faq");
            }}
            component={<Link to="/faq" />}
            active={window.location.pathname === "/faq"}
          >
            FAQ
          </MenuItem>
          <MenuItem
            icon={<CalendarTodayOutlinedIcon />}
            onClick={() => {
              handlePageChange("calendar");
            }}
            component={<Link to="/calendar" />}
            active={window.location.pathname === "/calendar"}
          >
            Calendar
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideBar;
