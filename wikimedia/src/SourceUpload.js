import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import { Quote } from "./Quote";
import { useState } from "react";
export const SourceUpload = (props) => {
  const [errMess, SeterrMess] = useState({
    Url: "Enter A valid URL",
    Book: "Upload Book",
    Image: "Upload Image",
    Video: "Upload Video",
  });
  const [isQuoteOpen, SetIsQuoteOpen] = useState(false);
  const [Book, SetBook] = useState({});
  const [Url, SetUrl] = useState("");
  const [Image, SetImage] = useState({});
  const [Video, SetVideo] = useState({});
  const [isUrlValid, SetUrlValid] = useState(false);
  return (
    <>
      <Modal
        isOpen={props.isSourceUpload}
        toggle={() => props.SetIsSourceUpload(!props.isSourceUpload)}
      >
        <ModalHeader
          toggle={() => {
            props.SetIsBook(false);
            props.SetIsImage(false);
            props.SetIsVideo(false);
            props.SetIsWeb(false);
            SetBook({});
            SetUrl("");
            SetImage({});
            SetVideo({});
            SeterrMess({
              Url: "Enter A valid URL",
              Book: "Upload Book",
              Image: "Upload Image",
              Video: "Upload Video",
            });
            props.SetIsSourceUpload(!props.isSourceUpload);
          }}
        >
          Upload
        </ModalHeader>
        <ModalBody>
          <Form>
            {props.book ? (
              <FormGroup row>
                <Label md={3} htmlFor="book">
                  Upload Book
                </Label>
                <Input
                  id="book"
                  type="file"
                  name="file"
                  onChange={(e) => {
                    if (e.target.files) {
                      SetBook(e.target.files);
                      SeterrMess({ ...errMess, Book: "" });
                    }
                  }}
                />
              </FormGroup>
            ) : null}
            {props.web ? (
              <FormGroup row className="mx-1">
                <Label md={3} htmlFor="url">
                  Pin The Link
                </Label>
                <Input
                  autoComplete="off"
                  valid={isUrlValid}
                  invalid={!isUrlValid}
                  id="url"
                  type="url"
                  name="url"
                  onChange={(e) => {
                    SetUrl(e.target.value);
                    const domain = new URL(e.target.value);
                    // domain.protocol //protocol
                    // domain.hostname //Hostname
                    // domain.search   //Query String
                    // domain.pathname //Path
                    console.log(domain);
                    if (domain === "") {
                      SeterrMess({ ...errMess, Url: "Enter URL" });
                      SetUrlValid(false);
                    } else if (domain.protocol == "https:") {
                      if (domain.hostname == "") {
                        SeterrMess({ ...errMess, Url: "Enter hostname " });
                        SetUrlValid(false);
                      } else if (
                        domain.hostname == "www.google.com" &&
                        domain.search == ""
                      ) {
                        SeterrMess({ ...errMess, Url: "Enter A Valid URL" });
                        SetUrlValid(false);
                      } else if (e.target.validity.valid) {
                        SeterrMess({ ...errMess, Url: "" });
                        SetUrlValid(true);
                      }
                    } else {
                      SeterrMess({
                        ...errMess,
                        Url: "URL doesn't follow protocol (not https)",
                      });

                      SetUrlValid(false);
                    }
                  }}
                />
                <FormFeedback>{errMess.Url}</FormFeedback>
              </FormGroup>
            ) : null}
            {props.image ? (
              <FormGroup row>
                <Label md={5} htmlFor="image">
                  Upload Image
                </Label>
                <Input
                  id="image"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files) {
                      SetImage(e.target.files);
                      SeterrMess({ ...errMess, Image: "" });
                    }
                  }}
                />
              </FormGroup>
            ) : null}
            {props.video ? (
              <FormGroup row>
                <Label md={5} htmlFor="video">
                  Upload Video/Lecture
                </Label>
                <Input
                  id="video"
                  type="file"
                  name="video"
                  accept="video/*"
                  onChange={(e) => {
                    if (e.target.files) {
                      SetVideo(e.target.files);
                      SeterrMess({ ...errMess, Video: "" });
                    }
                  }}
                />
              </FormGroup>
            ) : null}
            <div>
              <Button
                color="primary"
                className="float-start"
                onClick={(e) => {
                  SetBook({});
                  SetUrl("");
                  SetImage({});
                  SetVideo({});
                  SeterrMess({
                    Url: "Enter A valid URL",
                    Book: "Upload Book",
                    Image: "Upload Image",
                    Video: "Upload Video",
                  });
                  e.preventDefault();
                  props.SetIsSourceModalOpen(!props.isSourceModalOpen);
                  props.SetIsSourceUpload(!props.isSourceUpload);
                }}
              >
                BACK
              </Button>
              {(errMess.Book == "" && props.book) ||
              (errMess.Image == "" && props.image) ||
              (errMess.Url == "" && props.web) ||
              (errMess.Video == "" && props.video) ? (
                <Button
                  color="primary"
                  className="float-end"
                  onClick={() => {
                    props.SetIsSourceUpload(!props.isSourceUpload);
                    SetIsQuoteOpen(!isQuoteOpen);
                  }}
                >
                  QUOTE
                </Button>
              ) : null}
            </div>
          </Form>
        </ModalBody>
      </Modal>
      <Quote isQuoteOpen={isQuoteOpen} SetIsQuoteOpen={SetIsQuoteOpen} />
    </>
  );
};
