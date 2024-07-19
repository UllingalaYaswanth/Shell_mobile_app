import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FiCheck, FiX } from "react-icons/fi";

const NotificationCard = ({ raisedBy, raisedTime, vehicleNo, vehicleModel, location, contact, contactName }) => {
  return (
    <Card className="flex flex-row md:flex-row items-center p-4 mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <img
        src="https://dictionary.cambridge.org/images/thumb/truck_noun_002_39138.jpg?version=6.0.25"
        alt="Vehicle"
        className="md:w-10 h-10 object-cover mr-3 md:mr-4 mb-4 md:mb-0 rounded"
      />
      <div className="flex-grow">
        <p className="tracking-wide text-xxs md:text-sm"><strong className="text-xs md:text-base">Raised by:</strong> {raisedBy}</p>
        <p className="tracking-wide text-xxs md:text-sm"><strong className="text-xs md:text-base">Raised Time:</strong> {raisedTime}</p>
        <p className="tracking-wide text-xxs md:text-sm"><strong className="text-xs md:text-base">Vehicle No:</strong> {vehicleNo}</p>
        <p className="tracking-wide text-xxs md:text-sm"><strong className="text-xs md:text-base">Vehicle Model:</strong> {vehicleModel}</p>
        <p className="tracking-wide text-xxs md:text-sm"><strong className="text-xs md:text-base">Contact Name:</strong> {contactName}</p>
        <p className="tracking-wide text-xxs md:text-sm"><strong className="text-xs md:text-base">Contact No:</strong> {contact}</p>
        <p className="tracking-wide text-xxs md:text-sm"><strong className="text-xs md:text-base">Location:</strong> {location}</p>
    </div>
      <div className="flex flex-col space-y-3 mt-2 md:mt-0 md:ml-3">
        <div className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <FiCheck className="w-4 h-4 md:w-6 md:h-6" />
        </div>
        <div className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <FiX className="w-4 h-4 md:w-6 md:h-6" />
        </div>
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
      vehicleModel: "Model X",
      location: "Location Z",
      contact: "9854784310",
      contactName: "Laurence"
    },
    {
      raisedBy: "Jane Doe",
      raisedTime: "11:00 AM",
      vehicleNo: "DEF5678",
      vehicleModel: "Model Y",
      location: "Location A",
      contact: "9854784310",
      contactName: "John Wick"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <header className="flex items-center p-4 bg-white shadow-md rounded-lg mb-6">
        <img
          src="data:image/png;base64,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"
          alt="Logo"
          className="w-8 h-8 object-cover mr-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">Shell</h1>
      </header>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-base md:text-xl font-bold text-gray-800">Installation Request</h1>
        <span
          className="text-black py-2 px-4 md:px-6 transition-shadow duration-300 cursor-pointer"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          {showNotifications ? (
            <FaAngleUp className="inline-block text-xl align-middle" />
          ) : (
            <FaAngleDown className="inline-block text-xl align-middle" />
          )}
        </span>
      </div>
      {showNotifications && notifications.map((notification, index) => (
        <NotificationCard key={index} {...notification} />
      ))}
    </div>
  );
};

export default Dashboard;
