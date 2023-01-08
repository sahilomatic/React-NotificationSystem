import NotificationProvider, {
  useDispatch
} from "./Components/Notification/notificationProvider";
import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <input
          placeholder="enter message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        ></input>
        <button
          onClick={() => {
            dispatch({ message: message, status: "success" });
            setMessage("");
          }}
        >
          Add Success
        </button>
        <button
          onClick={() => {
            dispatch({ message: message, status: "error" });
            setMessage("");
          }}
        >
          Add Error
        </button>
      </div>
      <NotificationProvider />
    </div>
  );
}
