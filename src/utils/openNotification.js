import { notification } from "antd";

export const openNotificationWithIcon = (type, description) => {
    notification[type]({
        message: 'Notification Title',
        description: description,
    });
};