import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../Components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={3}>
        <Heading>OPS</Heading>
        <Text>
          {isRouteErrorResponse(error) ? "error in route" : "something wrong"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
