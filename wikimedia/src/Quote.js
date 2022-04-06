import {
  Input,
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  FormFeedback,
} from "reactstrap";
import { useState } from "react";
export const Quote = (props) => {
  const [Quote, SetQuote] = useState("");
  const [isvalid, SetIsValid] = useState(false);
  const [errMess, SeterrMess] = useState("");
  const Validator = (Quote) => {
    let regex = /^[a-zA-Z0-9_ ]*$/;
    if (Quote == "") {
      SetIsValid(false);
      SeterrMess("Quote can't be an empty string");
    } else if (!regex.test(Quote)) {
      SetIsValid(false);
      SeterrMess("Enter A Valid Quote");
    } else {
      SetIsValid(true);
      SeterrMess("");
    }
    // fs.readFile(FILE_LOCATION, function (err, data) {
    //   if (err) throw err;
    //   if(data.includes('search string')){
    //    console.log(data)
    //   }
    // });
    // Server Side Management for checking if the quote entered is present in the file upoaded
  };
  return (
    <>
      <Modal
        isOpen={props.isQuoteOpen}
        toggle={() => props.SetIsQuoteOpen(!props.isQuoteOpen)}
      >
        <ModalHeader toggle={() => props.SetIsQuoteOpen(!props.isQuoteOpen)}>
          Quote
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row className="mx-1">
              <Input
                valid={isvalid}
                invalid={!isvalid}
                type="textarea"
                name="quote"
                id="quote"
                rows="10"
                value={Quote}
                onChange={(e) => {
                  SetQuote(e.target.value);
                  Validator(e.target.value);
                }}
                placeholder="Give a Suitable Quote"
              />
              <FormFeedback>{errMess}</FormFeedback>
            </FormGroup>

            <Button
              color="success"
              type="Submit"
              disabled={!isvalid}
              onSubmit={(e) => {
                e.preventDefault();
                props.SetIsQuoteOpen(!props.isQuoteOpen);
              }}
            >
              SUBMIT
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};
