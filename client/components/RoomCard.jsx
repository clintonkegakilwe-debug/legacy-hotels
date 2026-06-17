function RoomCard(props) {
  return (
    <div>
      <h2>{props.roomName}</h2>
      <p>Price: P{props.price}</p>

      <button>Book Now</button>
    </div>
  );
}

export default RoomCard;