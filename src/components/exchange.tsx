import React, { useState } from "react";
import { Button, Card, Popover } from "antd";
import { TradeEntry } from "./trade";
import { AddToLiquidity } from "./pool/add";
import { PoolAccounts } from "./pool/view";
import { useWallet } from "../utils/wallet";
import { AccountInfo } from "./accountInfo";
import { Settings } from "./settings";
import { SettingOutlined } from "@ant-design/icons";
import { Icon } from '@iconify/react';
import Logo from "../images/Solmon_Logo.png";
import Navbar from '../components/Navbar';

export const ExchangeView = (props: {}) => {
  const { connected, wallet } = useWallet();
  const tabStyle: React.CSSProperties = { width: 120 };
  const tabList = [
    {
      key: "trade",
      tab: <div style={tabStyle}>Trade</div>,
      render: () => {
        return <TradeEntry />;
      },
    },
    {
      key: "pool",
      tab: <div style={tabStyle}>Pool</div>,
      render: () => {
        return <AddToLiquidity />;
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(tabList[0].key);

  const TopBar = (
    
   
    <div>
       <Navbar/>
    </div>
  );
  return (
    <>
      {TopBar}
      <div
        className="exchange-card">
      
        <p style={{ fontSize: "20px", color: "FFFFFF", marginTop: "20px" }}>Swap</p>
        {
          <Popover
            placement="topLeft"
            title="Settings"
            content={<Settings />}
            trigger="click"
          >
            <Button
              shape="circle"
              size="large"
              type="text"
              icon={<SettingOutlined />}
              className="Settings-btn"
              
            />
          </Popover>
        }
        {tabList.find((t) => t.key === activeTab)?.render()}
      </div>
    </>
  );
};
