import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import UserLoginQueries from "../../Resources/Queries/UserLoginQueries";

function AdminControls() {
  const [username, setUsername] = useState("");

  return (
    <div className="padding-10">
      <FormControl>
        <FormLabel>Username to delete</FormLabel>
        <TextField
          type="username"
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          value={username}
        />
        <Button
          className="width-250px"
          variant="outlined"
          onClick={(e: any) => {
            UserLoginQueries.deleteUser(username);
          }}
          title="Find By Id"
          value="Find By Id"
        >
          Delete User
        </Button>
      </FormControl>
    </div>
  );
}

export default AdminControls;
