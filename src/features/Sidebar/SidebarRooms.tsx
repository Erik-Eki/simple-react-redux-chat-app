'use client'

import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { getMessages } from '@/lib/api';

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
// import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
// import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
// import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
// import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
// import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
// import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
// import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
// import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./sidebar.css"

export const SidebarRooms = () => {

  let rooms = [
    { id: "1", name: "General" },
    { id: "2", name: "Memes" },
    { id: "3", name: "Conspiracy against the state" }
  ]

  const [close, setClose] = useState(true)
  const [activeRoom, setActiveRoom] = useState("1")

  function setCurrentRoom(roomID: string) {
    setActiveRoom(roomID)
  }

  return (
    <div style={{ display: "flex", height: "100vh", position: "absolute", left: 0, textAlign: "start" }}>
      <Sidebar
        className="app"
        width="fit-content"
        collapsed={close}
      >
        <Menu>
          <MenuItem className="menu1" icon={<MenuRoundedIcon />}
            onClick={() => setClose(!close)}
          >
            <h2>ROOMS</h2>
          </MenuItem>
          {rooms.map((room, index) => {
            return (
              <MenuItem
                className='room'
                key={index}
                icon={<GridViewRoundedIcon />}
                active={activeRoom === room.id}
                onClick={() => setCurrentRoom(room.id)}
              >{room.name}</MenuItem>
            )
          })}

          {/* <MenuItem icon={<GridViewRoundedIcon />}> Dashboard </MenuItem>
          <MenuItem icon={<ReceiptRoundedIcon />}> Invoices </MenuItem>
          <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
            <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
            <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
            <MenuItem icon={<AccountBalanceRoundedIcon />}>
              Current Wallet
            </MenuItem>
            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
          </SubMenu> */}
          <hr></hr>
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>
              Notifications
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
};

// export async function getStaticProps(context) {
//   // get the room id from the context
//   const roomId = context.params.roomId;
//   // get messages from database
//   const messages = await getMessages(1);
//   // return messages as props
//   return {
//     props: {
//       messages,
//     },
//   };
// }