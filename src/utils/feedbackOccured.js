import WebApp from "@twa-dev/sdk";

export const warningOccured = () => {
   WebApp.HapticFeedback.notificationOccurred("warning");
};
