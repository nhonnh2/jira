import { Button, Drawer, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actCloseModalForm } from "./module/action";

const withModalForm = (ComponentChild) => {
  return (props) => {
    const { title, visible } = useSelector((state) => {
      return state.modalFormReducer;
    });

    const dispatch = useDispatch();
    const onClose = () => {
      dispatch(actCloseModalForm());
    };
    const { handleSubmit } = props;
    return (
      <>
        <Drawer
          title={title}
          width={650}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={handleSubmit} type="primary">
                Submit
              </Button>
            </Space>
          }
        >
          <ComponentChild {...props} />
        </Drawer>
      </>
    );
  };
};
export default withModalForm;
