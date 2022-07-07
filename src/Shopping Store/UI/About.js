import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  return (
    <div>
      <h5 className="mt-5 ml-3">Something About Me </h5>
      <h1 className=" ml-3 ">
        <span className="text-danger">Zahida Ilyas</span>
      </h1>
      <p className="mt-1 ml-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className=" ml-3">
        Email:
        <a className="text-primary ml-1" mailto="zahi.ilyas340@gmail.com">
          zahi.ilyas340@gmail.com
        </a>
      </p>
      <p className=" ml-3">
        Phone
        <a className="text-primary ml-1" mailto="zahi.ilyas340@gmail.com">
          03412505935
        </a>
      </p>
      <Button
        variant="outlined"
        className="ml-5"
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>
    </div>
  );
};

export default About;
