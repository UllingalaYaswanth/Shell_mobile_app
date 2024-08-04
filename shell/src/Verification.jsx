import React, { useState } from 'react';
import { Button, Card, CardBody,IconButton,Typography  } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, FilterIcon, InformationCircleIcon } from "@heroicons/react/outline";


function Verfication() {
  const [step, setStep] = useState(3);
  const [obdNumber, setObdNumber] = useState("OBD001");
  const navigate = useNavigate();
  const [bluetoothName, setBluetoothName] = useState(null);
  const vehicleDetails = {
    raisedBy: "John Doe",
    raisedTime: "10:30 AM",
    vehicleNo: "ABC1234",
    vehicleModel: "Model X",
    location: "Location Z",
    contact: "9854784310",
    contactName: "Laurence"
  };
  const handleBluetoothConnect = () => {
    // Simulate Bluetooth connection logic
    setBluetoothName("MyBluetoothDevice"); // Example Bluetooth name
    setObdNumber("OBD001"); // Example OBD number
    setStep(2);
  };

  const handleObdClick = () => {
    setStep(3);
  };

  const handleTestClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col h-screen " >
        <div className="flex justify-between items-center p-1" style={{ backgroundColor: "rgba(187, 231, 254, 0.2)" }} >
          <IconButton variant="text" onClick={() => navigate(-1)} className='mt-3 items-center'>
              <ArrowLeftIcon className="h-6 w-6 text-gray-700 ml-6" />
          </IconButton>
          <Typography variant="h6" className="text-center text-gray-700 mr-10 mt-3">Verificatoin</Typography>
          <Typography variant="h6" className="text-center text-white"></Typography>
      </div>
      <Card className="w-[100%] h-[100%] flex flex-col items-center justify-center" style={{ backgroundColor: "rgba(187, 231, 254, 0.2)" }}>
      
        <CardBody>
          <div className="text-center">

            {step === 2 && (
              <>
                <Typography variant="h5" color="blue-gray" onClick={handleObdClick} className="cursor-pointer">
                <Button onClick={handleBluetoothConnect} color="blue" className='mb-5' style={{ backgroundColor: "#41729F", color: "white" }}>
                Bluetooth Connect
              </Button>
                    <p>OBD Number: {obdNumber}</p>
                </Typography>
              </>
            )}
            {step === 3 && (
              <>
                <Typography variant="h6" color="blue-gray">
                  Bluetooth: {bluetoothName}
                </Typography>
                <Typography variant="h6" color="blue-gray">
                  OBD: {obdNumber}
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mt-4">
                  Vehicle Information
                </Typography>
                <Typography variant="body1" className="mt-2">
                  Vehicle No: {vehicleDetails.vehicleNo}
                </Typography>
                <Typography variant="body1">
                  Model: {vehicleDetails.vehicleModel}
                </Typography>
                <Typography variant="body1">
                  Raised By: {vehicleDetails.raisedBy}
                </Typography>
                <Typography variant="body1">
                  Location: {vehicleDetails.location}
                </Typography>
                <Typography variant="body1">
                  Contact: {vehicleDetails.contactName} ({vehicleDetails.contact})
                </Typography>
                <Button onClick={handleTestClick} color="blue" className="mt-4" style={{ backgroundColor: "#41729F", color: "white" }}>
                  TEST
                </Button>
              </>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Verfication;
