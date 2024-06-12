import { io } from "socket.io-client";

const SOCKET_URL = "wss://app.gigachad.guru";

class SocketService {
   socket;

   connect(telegramUserId) {
      this.socket = io(SOCKET_URL, {
         path: `/ws`,
         query: {
            telegram_user_id: `${telegramUserId}`,
         },
         transports: ["websocket"],
      });

      this.socket.on("connect", () => {
         console.log("Connected to WebSocket server");
      });

      this.socket.on("stats_updated", (arg) => {
         console.log("STATS UPDATED:", arg);
      });

      this.socket.on("disconnect", () => {
         console.log("Disconnected from WebSocket server");
      });

      this.socket.on("error", (err) => {
         console.error("Error is:", err);
      });

      this.socket.on("connect_error", (err) => {
         console.error("Connection error:", err);
      });
   }

   disconnect() {
      if (this.socket) {
         this.socket.disconnect();
      }
   }

   sendMessage(message) {
      if (this.socket) {
         this.socket.emit("taps", message);
      }
   }

   onMessage(callback) {
      if (this.socket) {
         this.socket.on("message", callback);
      }
   }

   onStatsUpdated(callback) {
      if (this.socket) {
         this.socket.on("stats_updated", callback);
      }
   }
}

export default new SocketService();
