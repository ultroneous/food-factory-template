import styles from "./PrimaryButton.module.css";
const PrimaryButton = ({ text, devstyle }) => {
  return (
    <div className={styles.PrimaryButtonContainer} style={devstyle}>
      {text}
    </div>
  );
};
export default PrimaryButton;
