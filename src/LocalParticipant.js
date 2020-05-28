import CameraSelect from "./CameraSelect";
import React, { useState, useEffect, useRef } from "react";

const LocalParticipant = ({ participant }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);

  const videoRef = useRef();
  const audioRef = useRef();

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    participant.on("trackPublished", trackPublication => {
      if (trackPublication.track) {
        if (trackPublication.track.kind === "video") {
          setVideoTracks(trackpubsToTracks(participant.videoTracks));
        } else if (trackPublication.track.kind === "audio") {
          setAudioTracks(trackpubsToTracks(participant.audioTracks));
        }
      }
    });

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        console.log(videoTrack);
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  return (
    <div className="participant">
      <h3>{participant.identity}</h3>
      <video ref={videoRef} autoPlay={true} />
      <audio ref={audioRef} autoPlay={true} muted={true} />
      <CameraSelect participant={participant}></CameraSelect>
    </div>
  );
};

export default LocalParticipant;
