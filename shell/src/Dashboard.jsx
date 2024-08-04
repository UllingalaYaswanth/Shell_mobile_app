import React from "react";
import { Card, Button,IconButton,Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, FilterIcon, InformationCircleIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const items = [
    { name: "Dashboard", icon: "speed", path: "/metrics" },
    // { name: "Live data", icon: "multiline_chart", path: "/live-data" },
    { name: "All sensors", icon: "sensors", path: "/sensors" },
  ];
  const navigate = useNavigate();
  return (
    <div className="min-h-screen  text-white p-4 flex flex-col " style={{ backgroundColor: "rgba(187, 231, 254, 0.2)" }}>
      <div className="flex justify-between items-center mb-4">
          <IconButton variant="text" onClick={() => navigate(-1)}>
              <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
          </IconButton>
          <Typography variant="h6" className="text-center text-gray-700 mr-10">Test</Typography>
          <Typography variant="h6" className="text-center text-gray-700"></Typography>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <Link to={item.path} key={index} className="no-underline">
            <Card key={index} className=" border border-gray-700 text-center p-4 hover:bg-gray-800 flex flex-row gap-5 " style={{backgroundColor: "#0C6980"}}>
              <span className="material-icons text-white mb-2 text-4xl">
                {item.icon}
              </span>
              <p className="text-white">{item.name}</p>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-[540px]">
        <div className="mt-8 flex justify-center gap-4">
          <Button color="blue" size="lg" className="w-full max-w-xs" style={{ backgroundColor: "#41729F", color: "white" }}>
            Done
          </Button>
        </div>


      </div>
    </div>
  );
};

export default Dashboard;
