import { FunctionComponent } from "react";

export default interface IRoute {
  path: string;
  component: FunctionComponent;
  exact?: boolean;
}