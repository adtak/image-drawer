import { Authenticator } from "@aws-amplify/ui-react";
import { Box, Container, CssBaseline } from "@mui/material";
import type { AuthUser } from "aws-amplify/auth";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../container/Breadcrumbs";
import Header from "../container/Header";

export const UserContext = createContext<AuthUser | undefined>(undefined);

export default function Root() {
  return (
    <Authenticator hideSignUp>
      {({ user, signOut }) => (
        <>
          <CssBaseline />
          <Header signOut={signOut} />
          <Box sx={{ mt: 2 }}>
            <Container maxWidth="md">
              <Breadcrumbs />
              <UserContext.Provider value={user}>
                <Outlet />
              </UserContext.Provider>
            </Container>
          </Box>
        </>
      )}
    </Authenticator>
  );
}
