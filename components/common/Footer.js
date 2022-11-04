import { Col, Image, Row } from "react-bootstrap";
import PrimaryButton from "../UI/PrimaryButton";
import Container from "./Container";
import styles from "@/styles/common/Footer.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FooterMenu1, FooterMenu2, FooterMenu3 } from "utils/GlobalData.static";
const Footer = () => {
  return (
    <Container
      style={{ backgroundColor: "var(--globalBlue)", paddingTop: "3rem" }}
    >
      {/* 1st row */}
      <div className={styles.FooterFirstRow}>
        <div className={styles.FooterFirstRowImageSection}>
          <Image src={"/assets/img/footer-logo.svg"} alt={"footer-icon"} />
        </div>
        <div className={styles.FooterFirstRowContentSection}>
          <p className={styles.GetStartedText}>Ready to get started?</p>
          <div className={styles.ButtonWrapper}>
            <PrimaryButton text={"Get Started"} />
          </div>
        </div>
      </div>
      {/* 2nd row */}
      <hr className={styles.Hr} />
      {/* 3rd row */}
      <Row className={styles.ThirdRow}>
        <Col xl={4} xs={12} md={5}>
          <div className={styles.SubscribeText}>
            <p>Subscribe to our</p>
            <p>newsletter</p>
          </div>
          <div className={styles.InputContainer}>
            <div className={styles.InputWrapper}>
              <input type="email" placeholder="Email address" required />
              <button className={styles.GroupButton}>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
          <div className={styles.NewsLetterContent}>
            <p className={styles.NewsLetterParagraph}>Terms & Conditions</p>
            <p className={styles.NewsLetterParagraph}>Privacy Policy</p>
          </div>
        </Col>
        <Col xl={8} xs={12} md={7}>
          <Row>
            <Col xl={4} xs={6} md={4}>
              <ul className={styles.ListMenu}>
                {FooterMenu1.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </Col>
            <Col xl={4} xs={6} md={4}>
              <ul className={styles.ListMenu}>
                {FooterMenu2.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </Col>
            <Col xl={4} xs={6} md={4}>
              <ul className={styles.ListMenu}>
                {FooterMenu3.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
