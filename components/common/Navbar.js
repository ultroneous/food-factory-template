import { Col, Image, Offcanvas, Row } from "react-bootstrap";
import Container from "./Container";
import styles from "@/styles/common/navbar.module.css";
import { useState } from "react";
const SystemNavbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.NavbarVisibility}>
        <Container
          style={{ paddingRight: "5rem", paddingTop: "3rem" }}
          classnames={styles.Tabpadding}
        >
          <Row>
            <Col xl={3} md={1} className={styles.PaddingNone}>
              <div className={styles.ContentCenter}>
                <Image src="/assets/img/nav-icon.svg" alt="nav-icon" />
                <div
                  className={`${styles.FlexibleColumn} ${styles.IconContent}`}
                >
                  <Image src="/assets/img/nav-name.svg" alt="nav-icon" />
                  <Image src="/assets/img/nav-dis.svg" alt="nav-icon" />
                </div>
              </div>
            </Col>
            <Col xl={6} md={7} className={styles.ListWrapper}>
              <div className={styles.ListWrapper}>
                <ul className={styles.ListHead}>
                  {["Home", "Menu", "Services", "Feedback"].map(
                    (value, index) => (
                      <li>{value}</li>
                    )
                  )}
                </ul>
              </div>
            </Col>
            <Col xl={3} md={4} className={styles.ListWrapperInput}>
              <div className={styles.ListWrapperInput}>
                <ul className={styles.ListHead}>
                  <li>Login</li>
                  <li style={{ margin: "0" }}>
                    <div className={styles.SignupBtn}>Sign up</div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Row className={styles.MobileMenuRow}>
          <Col xl={3} md={1} xs={6}>
            <div className={styles.ContentCenter}>
              <Image src="/assets/img/nav-icon.svg" alt="nav-icon" />
              <div className={`${styles.FlexibleColumn} ${styles.IconContent}`}>
                <Image src="/assets/img/nav-name.svg" alt="nav-icon" />
                <Image src="/assets/img/nav-dis.svg" alt="nav-icon" />
              </div>
            </div>
          </Col>
          <Col xs={6} className={styles.MobileMenuIcon}>
            <div
              id="nav-icon2"
              className={show ? "open" : null}
              onClick={() => setShow(!show)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Col>
        </Row>
        <Offcanvas
          show={show}
          responsive="lg"
          placement={"bottom"}
          onHide={() => setShow(false)}
        >
          <Offcanvas.Body className={styles.MenuBox}>
            <ul className={styles.MenuListHead}>
              {["Home", "Menu", "Services", "Feedback"].map((value, index) => (
                <li>{value}</li>
              ))}
              <li>Login</li>
              <li>
                <div className={styles.SignupBtnMenu}>Sign up</div>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default SystemNavbar;
