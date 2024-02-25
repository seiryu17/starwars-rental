import React, { ReactElement } from "react";
import { CombineProvidersProps } from "../types/combineProvidersTypes";

const CombineProviders: React.FC<CombineProvidersProps> = ({
  providers,
  children,
}): ReactElement => {
  return providers.reduceRight(
    (kids, parent) => React.cloneElement(parent, { children: kids }),
    children as ReactElement
  );
};

export default CombineProviders;
