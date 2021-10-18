import React, { FC } from "react";
interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <div className="page-wrapper d-block">
      <div className="page-content container-fluid">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
