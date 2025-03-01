import styles from './index.module.scss';

const PageTitle = ({
  title,
  subTitle
}: {
  title: string;
  subTitle?: string;
}) => {
  return (
    <div className={styles.pageTitle}>
      <h1
        className={`${styles.pageTitle_title} ${styles.realistic_effect_text}`}
      >
        {title}
      </h1>
      {subTitle && (
        <h2
          className={`${styles.pageTitle_subTitle} ${styles.realistic_effect_text}`}
        >
          {subTitle}
        </h2>
      )}
    </div>
  );
};
export default PageTitle;
