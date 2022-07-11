import { FunctionComponent } from "react";
import styles from "styles/header.module.scss";

export const Header: FunctionComponent<{title: string}> = ({ title }) => {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org" className={styles.title__link}>{title}</a>
      </h1>
    </>
  );
};
