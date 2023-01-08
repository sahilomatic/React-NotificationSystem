import "./notification.css";
import { useEffect, useState } from "react";
import { useDispatchRemove } from "./notificationProvider";

export default function Notification({ data }) {
  const [interv, setInterv] = useState();
  const [barWidth, SetWidth] = useState(0);
  const dispatchRemove = useDispatchRemove();
  const handleProgressBar = () => {
    setInterv(
      setInterval(() => {
        SetWidth((prev) => {
          return prev + 10;
        });
      }, 1000)
    );
  };

  useEffect(() => {
    if (barWidth >= 100) {
      dispatchRemove();
    }
  }, [barWidth]);
  useEffect(() => {
    handleProgressBar();
  }, []);

  const handlePauseTimer = () => {
    clearInterval(interv);
  };

  const handleStartTimer = () => {
    handleProgressBar();
  };

  return (
    <div
      className="notification-item"
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
    >
      <p>{data.message}</p>
      <div
        className={`bar ${data.status == "success" ? "success" : "error"}`}
        style={{ width: `${barWidth < 100 ? barWidth : 100}%` }}
      >
        {".."}
      </div>
    </div>
  );
}
