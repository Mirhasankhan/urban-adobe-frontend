import React, { useState } from "react";
import { Switch, Card, Flex } from "antd";

const LoadingCard = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Flex>
      <Card loading={loading} style={{ minWidth: 300 }}>
        {loading ? null : null}
      </Card>
    </Flex>
  );
};

export default LoadingCard;
