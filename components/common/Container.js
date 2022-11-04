import styles from "@/styles/common/container.module.css";
const Container = ({ children, style, classnames }) => {
  return (
    <div className={`${styles.Container} ${classnames}`} style={style}>
      {children}
    </div>
  );
};
export default Container;
