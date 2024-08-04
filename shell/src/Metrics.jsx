import React from "react";
import { Card,Button,IconButton,Typography } from "@material-tailwind/react";
import { ArrowLeftIcon, FilterIcon, InformationCircleIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const Metrics = () => {
  const metrics = [
    { title: "Inst. fuel rate", value: "37.0", unit: "L/h" },
    { title: "Avg. fuel cons.", value: "58.9", unit: "L/100km" },
    { title: "Inst. fuel cons.", value: "32.5", unit: "L/100km" },
    { title: "Speed", value: "114", unit: "km/h" },
    { title: "Average speed", value: "99.6", unit: "km/h" },
    { title: "Engine RPM", value: "1028", unit: "rpm" },
    { title: "Distance travelled", value: "0.3", unit: "km" },
    { title: "Fuel used", value: "0.2", unit: "L" },
  ];

  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-4 flex flex-col " style={{ backgroundColor: "rgba(187, 231, 254, 0.2)" }}>
        <div className="flex justify-between items-center mb-[100px]">
          <IconButton variant="text" onClick={() => navigate(-1)}>
              <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
          </IconButton>
          <Typography variant="h6" className="text-center text-gray-700 mr-10">Dashboard</Typography>
          <Typography variant="h6" className="text-center text-white"></Typography>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
        {metrics.map((metric, index) => (
          <Card
            key={index}
            className="bg-[#274472] text-white text-center p-4 rounded-lg"
          >
            <h4 className="text-sm font-light">{metric.title}</h4>
            <h2 className="text-4xl font-bold">{metric.value}</h2>
            <p className="text-sm">{metric.unit}</p>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default Metrics;
