import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Глобальні стилі (базові стилі)
// import "./components/CafeInfo/CafeInfo.module.css";
// import "./components/Notification/Notification.module.css";
// import "./components/VoteOptions/VoteOptions.module.css";
// import "./components/VoteStats/VoteStats.module.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);