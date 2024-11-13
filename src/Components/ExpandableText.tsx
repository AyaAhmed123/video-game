import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  if (!children) return null;
  const [expand, setExpand] = useState(false);
  const limit = 30;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summery = expand ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summery}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft="1"
        onClick={() => setExpand(!expand)}
      >
        {expand ? "see less" : "show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
