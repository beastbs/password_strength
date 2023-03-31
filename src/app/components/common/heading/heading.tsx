import { createElement } from "react";
import { HeadingProps } from "../../../interfaces";
import "./heading.scss";

const Heading = ({ tag = "h1", text }: HeadingProps) => {
  const element = createElement(tag, { className: "heading" }, text);
  return element;
};

export default Heading;
