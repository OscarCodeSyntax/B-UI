import * as React from "react";
import BasicQueries from "../../Resources/DataService/BasicQueries";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../../App.css";

const ApiButtons = () => {
  const [screenValue, setscreenValue] = useState<String>("Null");

  const deleteOnClick = () => {
    if (BasicQueries.deleteById(2)) {
      setscreenValue("Deleted");
    }
  };

  const findAllOnClick = () => {
    if (BasicQueries.findAll()) {
      setscreenValue("Found All");
    }
  };

  const updateOnClick = () => {
    if (BasicQueries.update(2, "updated")) {
      setscreenValue("Updated");
    }
  };

  return (
    <div className="padding-10">
      {screenValue}
      <div>
        <div className="padding-10">
          <Button
            variant="outlined"
            onClick={(e: any) =>
              BasicQueries.create("create").then(setscreenValue)
            }
            title="Create"
            value="Create"
          >
            Create
          </Button>
        </div>
        <div className="padding-10">
          <Button
            variant="outlined"
            onClick={(e: any) => {
              deleteOnClick();
            }}
            title="Delete By Id"
            value="Delete By Id"
          >
            Delete By Id
          </Button>
        </div>
        <div className="padding-10">
          <Button
            variant="outlined"
            onClick={(e: any) => {
              findAllOnClick();
            }}
            title="Find All"
            value="Find All"
          >
            Find All
          </Button>
        </div>
        <div className="padding-10">
          <Button
            variant="outlined"
            onClick={(e: any) => {
              BasicQueries.findById(1).then(setscreenValue);
            }}
            title="Find By Id"
            value="Find By Id"
          >
            Find By Id
          </Button>
        </div>
        <div className="padding-10">
          <Button
            variant="outlined"
            onClick={(e: any) => {
              updateOnClick();
            }}
            title="Update"
            value="Update"
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApiButtons;
