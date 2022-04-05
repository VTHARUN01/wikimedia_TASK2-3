import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { SourceUpload } from "./SourceUpload";
import { useState } from "react";
export const SourceModal = (props) => {
  const [isBook, SetIsBook] = useState(false);
  const [isWeb, SetIsWeb] = useState(false);
  const [isVideo, SetIsVideo] = useState(false);
  const [isImage, SetIsImage] = useState(false);
  const [isSourceUpload, SetIsSourceUpload] = useState(false);

  return (
    <>
      <Modal
        isOpen={props.isSourceModalOpen}
        toggle={() => {
          props.SetIsSourceModalOpen(!props.isSourceModalOpen);
        }}
      >
        <ModalHeader
          toggle={() => {
            SetIsBook(false);
            SetIsImage(false);
            SetIsVideo(false);
            SetIsWeb(false);
            props.SetIsSourceModalOpen(!props.isSourceModalOpen);
          }}
        >
          SELECT SOURCE
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  checked={isBook}
                  onClick={(e) => {
                    SetIsBook(e.target.checked);
                  }}
                />{" "}
                BOOK
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  checked={isWeb}
                  onClick={(e) => {
                    SetIsWeb(e.target.checked);
                  }}
                />{" "}
                WEBSITE LINK
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  checked={isImage}
                  type="checkbox"
                  onClick={(e) => {
                    SetIsImage(e.target.checked);
                  }}
                />{" "}
                IMAGE
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  checked={isVideo}
                  type="checkbox"
                  onClick={(e) => {
                    SetIsVideo(e.target.checked);
                  }}
                />{" "}
                VIDEO/LECTURE LINK
              </Label>
            </FormGroup>
            {isBook || isImage || isWeb || isVideo ? (
              <Button
                color="primary"
                type="Submit"
                className="mt-1 btn float-end"
                onClick={(e) => {
                  e.preventDefault();
                  props.SetIsSourceModalOpen(!props.isSourceModalOpen);
                  SetIsSourceUpload(!isSourceUpload);
                }}
              >
                NEXT
              </Button>
            ) : null}
          </Form>
        </ModalBody>
      </Modal>
      <SourceUpload
        isSourceModalOpen={props.isSourceModalOpen}
        SetIsSourceModalOpen={props.SetIsSourceModalOpen}
        SetIsSourceUpload={SetIsSourceUpload}
        SetIsBook={SetIsBook}
        SetIsImage={SetIsImage}
        SetIsVideo={SetIsVideo}
        SetIsWeb={SetIsWeb}
        book={isBook}
        image={isImage}
        video={isVideo}
        web={isWeb}
        isSourceUpload={isSourceUpload}
      />
    </>
  );
};
