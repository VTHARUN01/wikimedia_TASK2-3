import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import { useState } from "react";
export const Groups = (props) => {
  const [groupName, SetGroupName] = useState("");
  const [Color, SetColor] = useState("");
  console.log(Color);
  return (
    <>
      <Modal
        isOpen={props.isCreateGroup}
        toggle={() => {
          props.SetIsCreateGroup(!props.isCreateGroup);
        }}
      >
        <ModalHeader
          toggle={() => {
            props.SetIsCreateGroup(!props.isCreateGroup);
          }}
        >
          CREATE A GROUP
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row className="mx-1">
              <Label htmlFor="name">Name Of The Group</Label>
              <Input
                type="text"
                id="name"
                placeholder="Group Name"
                value={groupName}
                onChange={(e) => {
                  SetGroupName(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup row className="ms-1">
              <Label md={3}>Color</Label>
              <Button
                className="ms-2 mt-2"
                style={{ borderRadius: "50%", width: "25px", height: "25px" }}
                onClick={() => {
                  SetColor("#1266F1");
                }}
                color="primary"
              ></Button>
              <Button
                className="ms-1 mt-2"
                style={{ borderRadius: "50%", width: "25px", height: "25px" }}
                onClick={() => {
                  SetColor("#F93154");
                }}
                color="danger"
              ></Button>
              <Button
                className="ms-1 mt-2"
                style={{ borderRadius: "50%", width: "25px", height: "25px" }}
                onClick={() => {
                  SetColor("#00B74A");
                }}
                color="success"
              ></Button>
              <Button
                className="ms-1 mt-2"
                style={{ borderRadius: "50%", width: "25px", height: "25px" }}
                onClick={() => {
                  SetColor("#39C0ED");
                }}
                color="info"
              ></Button>
              <Button
                className="ms-1 mt-2"
                style={{ borderRadius: "50%", width: "25px", height: "25px" }}
                onClick={() => {
                  SetColor("#FFA900");
                }}
                color="warning"
              ></Button>
            </FormGroup>
            {Color && groupName ? (
              <Button
                className="float-end"
                type="Submit"
                onClick={(e) => {
                  e.preventDefault();
                  props.SetIsCreateGroup(!props.isCreateGroup);
                }}
                color="success"
              >
                SUBMIT
              </Button>
            ) : null}
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};
