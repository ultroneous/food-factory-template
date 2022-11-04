import Container from "../common/Container";
import { Row, Col, Image } from "react-bootstrap";
import styles from "@/styles/home/herocomponent.module.css";
import { BiCurrentLocation } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
const HeroComponent = () => {
  return (
    <Container style={{ paddingRight: "0", paddingTop: "3rem" }}>
      <Row className={styles.HeroMainRow}>
        <Col
          xl={6}
          lg={6}
          xs={12}
          md={12}
          className={styles.HeroDescriptionCol}
        >
          <div className={styles.HeroDescription}>
            <div className={styles.HeroMainMiniTitleContainer}>
              <p className={styles.HeroMainMiniTitle}>
                Welcome to Food Factory
              </p>
              <hr className={styles.HeroHr} />
            </div>
            <h1 className={styles.HeroBigTitle}>
              Order your best
              <br />
              food anytime.
            </h1>
            <p className={styles.HeroParagraph}>
              Hey! Our Delicious Food is waiting for you, we are always near to
              you with item of food.
            </p>
            <div className={styles.InputMainContainer}>
              <div className={styles.InputContainer}>
                <BiCurrentLocation className={styles.InputIcon} />
                <input type="text" placeholder="Find nearby Restaurants" />
                <div className={styles.FindButtonContainer}>
                  <div className={styles.FindButton}>Find Now</div>
                </div>
              </div>
            </div>
            <div className={styles.IconMainContainer}>
              <div className={`${styles.IconWrapper} ${styles.IconFacebook}`}>
                <FaFacebook />
              </div>
              <div className={styles.IconWrapper}>
                <AiFillTwitterCircle />
              </div>
              <div className={styles.IconWrapper}>
                <AiFillInstagram />
              </div>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={6} xs={12} md={12}>
          <div className={styles.HeroImageContainer}>
            <Image
              src="/assets/img/hero-img.png"
              alt="heroimage"
              className={styles.HeroImage}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default HeroComponent;
