import { createElement } from "react";
import { ParagraphProps } from "../../../interfaces";

const Paragraph = ({ text }: ParagraphProps) => {
  const element = createElement("p", { className: "paragraph" }, text);
  return element;
};

export default Paragraph;
