import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { useUser } from "../../hooks/useUser";

export default function InputName() {
  const { user, setUser, handleAddUser } = useUser();

  const handleChangeUser = (e: {
    currentTarget: { value: React.SetStateAction<string> };
  }) => {
    setUser(e.currentTarget.value);
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Ingresa tu nombre..."
            variant="standard"
            value={user}
            onChange={handleChangeUser}
            onKeyDown={(event: { key: string }) => {
              if (event.key === "Enter") {
                handleAddUser();
              }
            }}
          />
        </Box>
        <Button
          onClick={handleAddUser}
          sx={{ marginTop: "10px" }}
          variant="contained"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
