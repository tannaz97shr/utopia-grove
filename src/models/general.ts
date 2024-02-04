export interface IHeaderMenuItem {
  id: string;
  title: string;
  href: string;
}

export interface IRawEvent {
  title: string;
  start_date: string;
  end_date: string;
  description: string;
  address: string;
  link: string;
  image: string;
}
export interface IEvent extends IRawEvent {
  id: number;
}

export interface ISubmitEventResponse {
  message?: string | null;
  status?: 200 | 500;
}

export interface IAuthResponse {
  message?: string | null;
  status?: 200 | 500;
}

export interface INotificationType {
  status: "success" | "error" | "pending";
  message: string;
}

export interface INotificationContext {
  notification?: INotificationType | null;
  showNotification: (notificationData: INotificationType) => void;
  hideNotification: () => void;
}

export interface ITabItem {
  id: "login" | "signup";
  title: string;
}
