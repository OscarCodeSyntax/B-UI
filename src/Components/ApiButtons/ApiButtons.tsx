import * as React from "react";
import BasicQueries from "../../Resources/DataService/BasicQueries";
import { useState } from "react";
import Button from "@mui/material/Button";
// import "./App.css";
import "./../../App.css";

const ApiButtons = () => {
  const [screenValue, setScreenValue] = useState<string>("Null");

  const deleteOnClick = async () => {
    if (await BasicQueries.deleteById(2)) {
      setScreenValue("Deleted");
    }
  };

  const findAllOnClick = async () => {
    if (await BasicQueries.findAll()) {
      setScreenValue("Found All");
    }
  };

  const updateOnClick = async () => {
    if (await BasicQueries.update(2, "updated")) {
      setScreenValue("Updated");
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
              BasicQueries.create("create").then(setScreenValue)
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
              BasicQueries.findById(1).then(setScreenValue);
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
