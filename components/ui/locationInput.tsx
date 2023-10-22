
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { LocateIcon } from 'lucide-react';

interface Location {
  latitude: number | null;
  longitude: number | null;
}

interface LocationInputProps {
  onLocationChange: (location: Location) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ onLocationChange }) => {
  const [location, setLocation] = useState<Location>({ latitude: null, longitude: null });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(userLocation);
          onLocationChange(userLocation);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported in your browser.');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      {location.latitude !== null && location.longitude !== null ? (
        <div className='flex  gap-2 justify-center'>
            <LocateIcon className='w-6 h-6' />
            <p>
            موقعیت شما: عرض جغرافیایی {location.latitude}, طول جغرافیایی {location.longitude}
            </p>
        </div>
      ) : (
        <p>
            <CircularProgress color="success" />
        </p>
      )}
    </div>
  );
};

export default LocationInput;
