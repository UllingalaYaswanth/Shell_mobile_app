import { Card, CardBody, Typography, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

export default function DiagnosticCard() {
    const sensorData = [
        { label: "Average fuel consumption", value: "42.26 L/100km", delay: "605ms" },
        { label: "Average fuel consumption (total)", value: "17.24 L/100km", delay: "605ms" },
        { label: "Average fuel consumption 10 sec", value: "41.93 L/100km", delay: "605ms" },
        { label: "Average speed", value: "112.61 km/h", delay: "605ms" },
        { label: "Average speed (GPS)", value: "0.04 km/h", delay: "5779ms" },
        { label: "Calculated boost", value: "0.55 bar", delay: "605ms" },
        { label: "Calculated instant fuel consumption", value: "145.83 L/100km", delay: "605ms" },
        { label: "Calculated instant fuel rate", value: "84 L/h", delay: "605ms" },
        { label: "Distance to empty", value: "234.89 km", delay: "605ms" },
        { label: "Distance travelled", value: "2.18 km", delay: "605ms" },
        { label: "Distance travelled (total)", value: "2.51 km", delay: "605ms" },
        { label: "Engine RPM x1000", value: "3.3 rpm", delay: "605ms" },
        { label: "Free space in fuel tank", value: "5 L", delay: "604ms" },
        { label: "Fuel level input (V)", value: "45 L", delay: "604ms" },
    ];

    const navigate = useNavigate();

    return (
        <div className="p-3 min-h-screen text-white" style={{ backgroundColor: "rgba(187, 231, 254, 0.2)" }}>
            <div className="flex justify-between items-center mb-5">
                <IconButton variant="text" onClick={() => navigate(-1)} className='mt-3 items-center'>
                    <ArrowLeftIcon className="h-6 w-6 text-gray-700 ml-6" />
                </IconButton>
                <Typography variant="h6" className="text-center text-gray-700 mr-10 mt-3">All Sensors</Typography>
                <Typography variant="h6" className="text-center text-white"></Typography>
            </div>
            <Card className="max-w-md mx-auto">
                <CardBody>
                    {sensorData.map((data, index) => (
                        <div key={index} className="flex justify-between items-center py-1 border-b border-gray-400">
                            <Typography variant="small" className="text-gray-600 flex-grow">{data.label}</Typography>
                            <div className="flex flex-col items-end">
                                <Typography variant="small" className="text-red-500">{data.delay}</Typography>
                                <Typography variant="small" className="text-white">{data.value}</Typography>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </div>
    );
}
