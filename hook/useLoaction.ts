import { useEffect, useRef, useState } from "react";

export const useGeolocation = (options = {}) => {
  const [state, setState] = useState<any>({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null,
  });

  const optionsRef = useRef(options);

  useEffect(() => {
    const onEvent = ({ coords, timestamp }: any) => {
      setState({
        loading: false,
        timestamp,
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
      });
    };

    const onEventError = (error: any) => {
      setState((s: any) => ({
        ...s,
        loading: false,
        error,
      }));
    };

    navigator.geolocation.getCurrentPosition(
      onEvent,
      onEventError,
      optionsRef.current
    );

    const watchId = navigator.geolocation.watchPosition(
      onEvent,
      onEventError,
      optionsRef.current
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return state;
};
