import Container from "../common/Container";
import styles from "@/styles/home/ourdish.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Col, Image, Row } from "react-bootstrap";
import PrimaryButton from "../UI/PrimaryButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
const DishCard = ({ img, name, paragraph, key }) => {
  return (
    <div className={styles.CardDish} key={key}>
      {/* <div className={styles.Redtag}>
        <p className={styles.Number}>$20</p>
      </div> */}
      <div>
        <Image src={img} alt={img} fluid />
      </div>
      <p className={styles.NameOfDish}>{name}</p>
      <div className={styles.ContentCenter}>
        <Image
          src={"/assets/img/stars2.svg"}
          alt={"star"}
          fluid
          className={styles.ImageSpace}
        />
      </div>
      <p className={styles.Paragraph}>{paragraph}</p>
      <div className={styles.ContentCenter}>
        <div className={styles.ButtonCart}>Add to Cart</div>
      </div>
    </div>
  );
};
const OurDishes = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          // autoplay: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
  const ListOfFoodItem = [
    {
      img: "/assets/img/item1.svg",
      name: "Pasta",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "/assets/img/item1.svg",
      name: "Fish Curry",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "/assets/img/item1.svg",
      name: "Chicken Shawarma",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "/assets/img/item1.svg",
      name: "French Fries",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  const sliderRef = useRef(null);
  return (
    <Container
      style={{
        backgroundColor: "var(--globalBlue)",
        paddingRight: "0",
        paddingTop: "8rem",
        paddingBottom: "6rem",
      }}
      classnames={styles.MobPadding}
    >
      <Row className={styles.MainRow}>
        <Col xl={8} lg={8} md={8} xs={12}>
          <h4 className={styles.Heading}>Our Dishes</h4>
        </Col>
        <Col xl={4} lg={4} md={4} xs={12} className={styles.ButtonContainer}>
          <div className={styles.ActionButton}>
            <AiOutlineLeft onClick={() => sliderRef.current.slickPrev()} />
          </div>
          <div className={styles.ActionButton}>
            <AiOutlineRight onClick={() => sliderRef.current.slickNext()} />
          </div>
        </Col>
      </Row>
      <Row className={styles.RowSlider}>
        <div>
          <Slider {...settings} ref={sliderRef}>
            {ListOfFoodItem.map((v, i) => (
              <DishCard
                img={v.img}
                name={v.name}
                paragraph={v.paragraph}
                key={i}
              />
            ))}
          </Slider>
        </div>
      </Row>
    </Container>
  );
};
export default OurDishes;
