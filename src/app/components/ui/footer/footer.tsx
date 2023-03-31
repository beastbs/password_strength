import Heading from "../../common/heading";
import Paragraph from "../../common/paragraph/paragraph";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__title">
        <Paragraph text="Created by" />
        <Heading text="Boris Chepurnoy" tag="h3" />
      </div>
    </footer>
  );
};

export default Footer;
