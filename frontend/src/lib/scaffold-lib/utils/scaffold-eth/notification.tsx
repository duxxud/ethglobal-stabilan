import React from "react";
import { toast } from "react-hot-toast";

import { Spinner } from "../../..";

type TPositions =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

type TNotificationProps = {
  content: React.ReactNode;
  status: "success" | "info" | "loading" | "error" | "warning";
  duration?: number;
  icon?: string;
  position?: TPositions;
};

type NotificationOptions = {
  duration?: number;
  icon?: string;
  position?: TPositions;
};

const ENUM_STATUSES = {
  success: <>🍭</>,
  loading: <Spinner />,
  error: <>🌋</>,
  info: <>💁</>,
  warning: <>⚠️</>,
};

const DEFAULT_DURATION = 3000;
const DEFAULT_POSITION: TPositions = "top-center";

/**
 * Custom Notification
 */
const Notification = ({
  content,
  status,
  duration = DEFAULT_DURATION,
  icon,
  position = DEFAULT_POSITION,
}: TNotificationProps) => {
  return toast.custom(
    (t) => (
      <div
        className={`flex flex-row bg-slate-200 items-start justify-between max-w-sm rounded-xl shadow-center shadow-accent bg-base-200 p-4 transform-gpu relative transition-all duration-500 ease-in-out space-x-2
        ${
          position.substring(0, 3) == "top"
            ? `hover:translate-y-1 ${t.visible ? "top-0" : "-top-96"}`
            : `hover:-translate-y-1 ${t.visible ? "bottom-0" : "-bottom-96"}`
        }`}
      >
        <div className="text-2xl self-start">
          {icon ? icon : ENUM_STATUSES[status]}
        </div>
        <div className={`break-all whitespace-pre-line ${icon ? "mt-1" : ""}`}>
          {content}
        </div>

        <div
          className={`cursor-pointer text-lg ${icon ? "mt-1" : ""}`}
          onClick={() => toast.dismiss(t.id)}
        >
          ✖️
        </div>
      </div>
    ),
    {
      duration: status === "loading" ? Infinity : duration,
      position,
    }
  );
};

export const notification = {
  success: (content: React.ReactNode, options?: NotificationOptions) => {
    return Notification({ content, status: "success", ...options });
  },
  info: (content: React.ReactNode, options?: NotificationOptions) => {
    return Notification({ content, status: "info", ...options });
  },
  warning: (content: React.ReactNode, options?: NotificationOptions) => {
    return Notification({ content, status: "warning", ...options });
  },
  error: (content: React.ReactNode, options?: NotificationOptions) => {
    return Notification({ content, status: "error", ...options });
  },
  loading: (content: React.ReactNode, options?: NotificationOptions) => {
    return Notification({ content, status: "loading", ...options });
  },
  remove: (toastId: string) => {
    toast.remove(toastId);
  },
};
