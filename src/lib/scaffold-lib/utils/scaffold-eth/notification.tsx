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

// const ENUM_STATUSES = {
//   success: <CheckCircleIcon className="w-7 text-success" />,
//   loading: <Spinner />,
//   error: <ExclamationCircleIcon className="w-7 text-error" />,
//   info: <InformationCircleIcon className="w-7 text-info" />,
//   warning: <ExclamationTriangleIcon className="w-7 text-warning" />,
// };

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
  return <>test</>;
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
  remove: (toastId: any) => {
    // toast.remove(toastId);
  },
};
