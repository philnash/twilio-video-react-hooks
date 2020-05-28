import React, { useState, useEffect } from "react";
import { createLocalVideoTrack } from "twilio-video";

const CameraSelect = ({ participant }) => {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    (async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      setCameras(devices.filter((device) => device.kind === "videoinput"));
    })();
  }, []);

  const handleCameraChange = (deviceId) => {
    return async () => {
      participant.videoTracks.forEach((trackPublication) => {
        trackPublication.unpublish();
        trackPublication.track.stop();
      });
      const newVideoTrack = await createLocalVideoTrack({
        deviceId: { exact: deviceId },
      });
      participant.publishTrack(newVideoTrack);
    };
  };

  return (
    <div>
      {cameras.map((camera) => (
        <p key={camera.deviceId}>
          <button onClick={handleCameraChange(camera.deviceId)}>
            {camera.label}
          </button>
        </p>
      ))}
    </div>
  );
};

export default CameraSelect;
