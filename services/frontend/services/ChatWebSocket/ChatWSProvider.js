// import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
// import { createContext } from "react";
// import { useRef } from "react";
// import { useSelector } from "react-redux";
// import { ChatApi } from "../ChatApi";
// import { API_DOMAIN } from "../Instance";
// import {
//   QUERY_CONNECTED_USERS,
//   QUERY_DIALOGS,
// } from "../QueryClient/ChatQueries";
// import { queryClient } from "../QueryClient/QueryClient";
// import { Cookies } from "../tools/CookieController";

// const ChatContext = createContext(null);

// const messageHandler = e => {
//   const { type } = JSON.parse(e.data);
//   console.log(e.data);

//   switch (type) {
//     case "connected_changes":
//       queryClient.invalidateQueries(QUERY_CONNECTED_USERS);
//       break;

//     case "new_message":
//       queryClient.invalidateQueries(QUERY_DIALOGS);
//       break;

//     default:
//       break;
//   }
// };

// const closeHandler = e => {
//   cleanup();
//   setTimeout(createConnection, 3000);
// };

// const openHandler = e => {
//   console.log("open");
// };

// const cleanup = () => {
//   if (!ws) return;
//   ws.removeEventListener("open", openHandler);
//   ws.removeEventListener("close", closeHandler);
//   ws.removeEventListener("message", messageHandler);
//   ws.close();
// };

// let ws;

// const createConnection = () => {
//   if (!!ws) cleanup(ws);

//   ws = new WebSocket(
//     `${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/ws/?token=${Cookies.getCookies(
//       "access"
//     )}`
//   );

//   ws.addEventListener("open", openHandler);
//   ws.addEventListener("message", messageHandler);
//   ws.addEventListener("close", closeHandler);
// };

// const ChatWSProvider = ({ children }) => {
//   const { isAuthed } = useSelector(state => state.auth);

//   useEffect(() => {
//     if (isAuthed) {
//       createConnection();
//     } else cleanup();
//   }, [isAuthed]);

//   useEffect(() => {
//     return () => {
//       cleanup();
//     };
//   }, []);

//   return <>{children}</>;
// };

// export default ChatWSProvider;
// ChatWSProvider.js

// ChatWSProvider.js
import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Cookies } from "../tools/CookieController";
import {
  QUERY_CONNECTED_USERS,
  QUERY_DIALOGS,
} from "../QueryClient/ChatQueries";
import { queryClient } from "../QueryClient/QueryClient";

export const ChatContext = createContext(null);

const messageHandler = e => {
  const { type } = JSON.parse(e.data);
  console.log(e.data);

  switch (type) {
    case "connected_changes":
      queryClient.invalidateQueries(QUERY_CONNECTED_USERS);
      break;

    case "new_message":
      queryClient.invalidateQueries(QUERY_DIALOGS);
      break;

    default:
      break;
  }
};

const closeHandler = e => {
  cleanup();
  setTimeout(createConnection, 3000);
};

const openHandler = e => {
  console.log("open");
};

const errorHandler = e => {
  console.error("WebSocket error:", e);
  // Handle the error here (e.g., display an error message, retry connection)
};

const cleanup = () => {
  if (!ws) return;
  ws.removeEventListener("open", openHandler);
  ws.removeEventListener("close", closeHandler);
  ws.removeEventListener("message", messageHandler);
  ws.removeEventListener("error", errorHandler);
  ws.close();
};

let ws;

const createConnection = () => {
  if (!!ws) cleanup(ws);

  ws = new WebSocket(
    `${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/ws/?token=${Cookies.getCookies(
      "access"
    )}`
  );

  ws.addEventListener("open", openHandler);
  ws.addEventListener("message", messageHandler);
  ws.addEventListener("close", closeHandler);
  ws.addEventListener("error", errorHandler);
};

const ChatWSProvider = ({ children }) => {
  const { isAuthed } = useSelector(state => state.auth);
  const [newMessageCount, setNewMessageCount] = useState(0);

  useEffect(() => {
    if (isAuthed) {
      createConnection();
    } else cleanup();
  }, [isAuthed]);

  useEffect(() => {
    return () => {
      cleanup();
    };
  }, []);

  return (
    <ChatContext.Provider value={{ newMessageCount }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatWSProvider;
