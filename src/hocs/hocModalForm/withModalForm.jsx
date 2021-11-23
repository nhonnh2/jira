import { Button, Drawer, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actCloseModalForm } from "./module/action";

const withModalForm = (ComponentChild, typeInput) => {
  return (props) => {
    const { title, type } = useSelector((state) => {
      return state.modalFormReducer;
    });
    const visible = type === typeInput;
    const dispatch = useDispatch();
    const onClose = () => {
      dispatch(actCloseModalForm());
    };
    const { handleSubmit } = props;
    return (
      <>
        <Drawer
          title={title}
          width={550}
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
