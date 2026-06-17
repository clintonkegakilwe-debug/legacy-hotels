import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div>
      <Home />
      <hr />

      <Rooms />
      <hr />

      <Booking />
      <hr />

      <AdminDashboard />
    </div>
  );
}

export default App;