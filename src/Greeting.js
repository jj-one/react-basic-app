import GuestGreaating from "./GuestGreeting";
import UserGreaating from "./UserGreeting";

function Greeting(props) {
  if (props.isLoggedIn){
    return <UserGreaating />;
  }
  return <GuestGreaating />;
}

export default Greeting;