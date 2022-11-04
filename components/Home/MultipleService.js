import { Col, Image, Row } from "react-bootstrap";
import Container from "../common/Container";
import styles from "@/styles/home/multipleservice.module.css";
import { ListOfCook } from "utils/GlobalData.static";

const MultipleService = () => {
  const CircleButton = ({ img, txt }) => {
    return (
      <div className={styles.CircleGroup}>
        <div className={styles.CircleWhite}>
          <div className={styles.CircleImage}>
            <Image src={img} alt={img} />
          </div>
        </div>
        <div className={styles.CircleButton}>{txt}</div>
      </div>
    );
  };

  return (
    <Container
      style={{ paddingRight: "0", paddingTop: "7rem" }}
      classnames={styles.Mobpadding}
    >
      <Row>
        <Col xl={12} xs={12} lg={12} md={12}>
          <h4 className={styles.MainHeading}>
            We Are More Than Multiple Service
          </h4>
          <p className={styles.MainParagraph}>
            This is a type of restaurant which typically serves food and drinks
            in addition to light refreshments such as baked goods of snacks. The
            term comes from the rench word meaning food.
          </p>
        </Col>
      </Row>
      <Row className={styles.SwapColumn}>
        <Col xl={6} lg={6} md={12} xs={12} className={styles.CircleButtonCol}>
          <Row className={styles.featureRow}>
            {ListOfCook.map((values, index) => (
              <Col
                xl={5}
                xs={6}
                lg={5}
                md={6}
                className={styles.CircleButtonCol}
              >
                <CircleButton img={values.img} txt={values.txt} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xl={6} xs={12} md={12}>
          <div className={styles.ImageBitSpace}>
            <Image src="/assets/img/Cook.png" alt="cook" fluid />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default MultipleService;
