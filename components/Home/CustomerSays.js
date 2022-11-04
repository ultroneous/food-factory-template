import { Col, Image, Row } from "react-bootstrap";
import Container from "../common/Container";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from "@/styles/home/customersays.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiTrendingUp } from "react-icons/bi";
import { useRef } from "react";
import { CustomerdataList } from "utils/GlobalData.static";
const CustomerSays = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
          autoplay: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
          // autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  return (
    <Container style={{ paddingRight: "0" }} classnames={styles.mobPadding}>
      <Row className={styles.MainRow}>
        <Col xl={7} md={8}>
          <h4 className={styles.Heading}>What Our Customer Says?</h4>
        </Col>
        <Col xl={5} md={4} className={styles.ButtonContainer}>
          <div
            className={styles.ActionButton}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <AiOutlineLeft />
          </div>
          <div
            className={styles.ActionButton}
            onClick={() => sliderRef.current.slickNext()}
          >
            <AiOutlineRight />
          </div>
        </Col>
      </Row>
      <Row className={styles.SliderContainer}>
        <Col xl={12} className={styles.feedbackSlider}>
          <Slider {...settings} ref={sliderRef}>
            {CustomerdataList.map((v, i) => (
              <div>
                <div className={styles.CardCustomer}>
                  <p className={styles.CardParagraph}>{v.paragraph}</p>
                  <div className={styles.Icon}>
                    <Image src={v.icon} alt={v.icon} />
                  </div>
                  <p className={styles.Name}>{v.name}</p>
                  <div className={styles.Stars}>
                    <Image src="/assets/img/stars.svg" alt="rating" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};
export default CustomerSays;
