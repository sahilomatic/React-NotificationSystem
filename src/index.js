import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import NotificationProvider from "./Components/Notification/notificationProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </StrictMode>
);
