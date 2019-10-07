import React from 'react';

const Login = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter a room</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>

      <div>
        <label htmlFor="room">Room name:</label>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
