import Notification from "./notification";
import { useState, useReducer, useContext, createContext } from "react";
import { v4 } from "uuid";
import "./notification.css";
const NotificationCOntext = createContext();
export default function NotificationProvider(props) {
  const handleAction = (currentState, action) => {
    switch (action.type) {
      case "add":
        return [...currentState, { ...action.payload }];

      case "remove":
        return currentState.filter((obj) => {
          obj.id != action.payload.id;
        });

      default:
        return currentState;
    }
  };
  const [notifications, dispatch] = useReducer(handleAction, []);

  return (
    <NotificationCOntext.Provider value={dispatch}>
      <div className="notification-wrapper">
        {notifications.map((obj) => {
          return <Notification data={obj} key={obj.id} />;
        })}
      </div>
      {props.children}
    </NotificationCOntext.Provider>
  );
}

export function useDispatch(props) {
  const dispatch = useContext(NotificationCOntext);
  return (props) => {
    dispatch({
      type: "add",
      payload: { id: v4(), ...props }
    });
  };
}

export function useDispatchRemove(props) {
  const dispatch = useContext(NotificationCOntext);
  return (props) => {
    dispatch({
      type: "remove",
      payload: { id: v4(), ...props }
    });
  };
}
