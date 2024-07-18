import React, { useState } from "react";
import { Card, Button } from "@material-tailwind/react";
import { FiCheck, FiX } from "react-icons/fi";

const NotificationCard = ({ raisedBy, raisedTime, vehicleNo, chassisNo, vehicleModel, manufacturer, odometer, location }) => {
  return (
    <Card className="flex flex-col md:flex-row items-center p-4 mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <img
        src="https://dictionary.cambridge.org/images/thumb/truck_noun_002_39138.jpg?version=6.0.25"
        alt="Vehicle"
        className="w-full md:w-20 h-20 object-cover mr-0 md:mr-4 mb-4 md:mb-0 rounded"
      />
      <div className="flex-grow">
        <p className="font-semibold text-xs md:text-base "><strong>Raised by:</strong> {raisedBy}</p>
        <p className="font-semibold text-xs md:text-base "><strong>Raised Time:</strong> {raisedTime}</p>
        <p className="font-semibold text-xs md:text-base "><strong>Vehicle No:</strong> {vehicleNo}</p>
        <p className="font-semibold text-xs md:text-base "><strong>Chassis No:</strong> {chassisNo}</p>
        <p className="font-semibold text-xs md:text-base "><strong>Vehicle Model:</strong> {vehicleModel}</p>
        <p className="font-semibold text-xs md:text-base "><strong>Manufacturer:</strong> {manufacturer}</p>
        <p className="font-semibold text-xs md:text-base "><strong>Odometer:</strong> {odometer}</p>
        <p className="font-semibold text-xs md:text-base "><strong>Location:</strong> {location}</p>
      </div>
      <div className="flex flex-col space-y-2 mt-4 md:mt-0 md:ml-4">
        <Button className="flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
          <FiCheck className="mr-2" /> Accept
        </Button>
        <Button className="flex items-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
          <FiX className="mr-2" /> Deny
        </Button>
      </div>
    </Card>
  );
};

const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      raisedBy: "John Doe",
      raisedTime: "10:30 AM",
      vehicleNo: "ABC1234",
      chassisNo: "XYZ5678",
      vehicleModel: "Model X",
      manufacturer: "Manufacturer Y",
      odometer: "12345 km",
      location: "Location Z"
    },
    {
      raisedBy: "Jane Doe",
      raisedTime: "11:00 AM",
      vehicleNo: "DEF5678",
      chassisNo: "LMN1234",
      vehicleModel: "Model Y",
      manufacturer: "Manufacturer Z",
      odometer: "54321 km",
      location: "Location A"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <header className="flex items-center p-4 bg-white shadow-md rounded-lg mb-6">
        <img
          src="https://ullingalayaswanth.github.io/Intelliod/assets/img/Intelliod_logo.png"
          alt="Logo"
          className="w-10 h-10 object-cover mr-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">INTELLIOD</h1>
      </header>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg md:text-2xl font-bold text-gray-800">Installation Request</h1>
        <Button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 md:px-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          View Requests
        </Button>
      </div>
      {showNotifications && notifications.map((notification, index) => (
        <NotificationCard key={index} {...notification} />
      ))}
    </div>
  );
};

export default Dashboard;
