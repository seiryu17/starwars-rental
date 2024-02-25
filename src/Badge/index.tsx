import React from "react";
import { BadgeTypes } from "../types/components/badge";

function Badge({ count }: BadgeTypes) {
  return (
    <div className="absolute top-0 right-0 bg-red-600 rounded-full px-1 text-sm">
      {count}
    </div>
  );
}

export default Badge;
