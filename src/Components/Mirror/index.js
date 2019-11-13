import React from "react";

import { useCount } from "../../context/count";

export default function Mirror() {
  const { count } = useCount();

  return (
    <span>
      <b>Mirror: </b>
      {count}
    </span>
  );
}
