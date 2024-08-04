import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FiCheck, FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.jpeg';
import truck1 from './assets/Ashok_LP.jpg'
import truck2 from './assets/truck.jpg'
import lorry8 from "./assets/BharatBenz.jpg"
import lorry9 from "./assets/SML_i.jpg"
import lorry10 from "./assets/Force_m.webp"

const NotificationCard = ({ raisedBy, raisedTime, vehicleNo, vehicleModel, location, contact, contactName, onDelete,image }) => {

  const navigate = useNavigate();

  const handleCheckClick = () => {
    navigate('/verfication');
  };

  return (
    <Card className="flex flex-row md:flex-row items-center p-4 mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <img
        src={image}
        alt="Vehicle"
        className="md:w-10 h-10 object-cover mr-3 md:mr-4 mb-4 md:mb-0 rounded"
      />
      <div className="flex-grow">

        <p className="text-gray-500 text-xs"><strong className="font-bold text-gray-800">Raised by: </strong> {raisedBy}</p>
        <p className="text-gray-500 text-xs"><strong className="font-bold text-gray-800">Raised Time: </strong> {raisedTime}</p>
        <p className="text-gray-500 text-xs"><strong className="font-bold text-gray-800">Vehicle No: </strong> {vehicleNo}</p>
        <p className="text-gray-500 text-xs"><strong className="font-bold text-gray-800">Vehicle Model: </strong> {vehicleModel}</p>
        <p className="text-gray-500 text-xs"><strong className="font-bold text-gray-800">Contact Name: </strong> {contactName}</p>
        <p className="text-gray-500 text-xs"><strong className="font-bold text-gray-800">Contact No: </strong> {contact}</p>
        <p className="text-gray-500 text-xs"><strong className="font-bold text-gray-800">Location: </strong> {location}</p>
      </div>
      <div className="flex flex-col space-y-3 mt-2 md:mt-0 md:ml-3">
        <div className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={handleCheckClick}>
          <FiCheck className="w-4 h-4 md:w-6 md:h-6" />
        </div>
        <div className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={onDelete}>
          <FiX className="w-4 h-4 md:w-6 md:h-6" />
        </div>
      </div>
    </Card>
  );
};

const Home = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      image:truck1,
      raisedBy: "Amarjit",
      raisedTime: "10:30 AM",
      vehicleNo: "KA03 MN 5678",
      vehicleModel: "BharatBenz 3128",
      location: "Karnataka",
      contact: "9854784310",
      contactName: "Rajesh"
    },
    {
      id: 2,
      image:truck2,
      raisedBy: "Sanjay",
      raisedTime: "11:00 AM",
      vehicleNo: "TS22 XY 8012",
      vehicleModel: "Ashok Leyland Dost",
      location: "Telangana",
      contact: "9854784310",
      contactName: "Davinder"
    },
    {
      id: 3,
      image:lorry8,
      raisedBy: "Arun",
      raisedTime: "09:00 AM",
      vehicleNo: "AP27 HJ 6781",
      vehicleModel: "Eicher Motors",
      location: "Andhra Pradesh",
      contact: "9872334310",
      contactName: "Manoj"
    },
    {
      id: 4,
      image:lorry9,
      raisedBy: "Sukhdev",
      raisedTime: "04:00 AM",
      vehicleNo: "MH12 HG 1312",
      vehicleModel: "Force Motors Trax",
      location: "Telangana",
      contact: "8692348777",
      contactName: "Maharashtra"
    },
  ]);

  const [message, setMessage] = useState("");

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
    setMessage("Notification deleted successfully!");
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6" style={{ backgroundColor: "rgba(187, 231, 254, 0.2)" }}>
      <header className="flex items-center p-4 bg-white shadow-md rounded-lg mb-6">
        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8 object-cover mr-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">Decarbonization AI</h1>
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
      {message && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      {showNotifications && notifications.map(notification => (
        <NotificationCard
          key={notification.id}
          {...notification}
          onDelete={() => handleDeleteNotification(notification.id)}
        />
      ))}
    </div>
  );
};

export default Home;
