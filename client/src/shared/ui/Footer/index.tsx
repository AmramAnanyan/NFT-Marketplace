import { Link } from 'react-router-dom';
import { IFooter } from 'shared/types';
import styles from './index.module.scss';
import InputUi from '../InputUI';
import ButtonUI from '../ButtonUI';
import { SyntheticEvent } from 'react';
import githubIcone from '../../assets/pngIcon/githubIcon.png';
import linkedinIcone from '../../assets/pngIcon/linkedinIcon.png';

const Footer = ({ navigations }: IFooter) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sectionWrapper}>
        <div className={styles.columnsConteiner}>
          {navigations.map(({ id, path, title, subTitles }) => {
            return (
              <>
                <ul key={id} className={styles.columnNavigation}>
                  <Link to={path}>{title}</Link>

                  {subTitles?.map(({ id, path, title }) => {
                    if (title === 'Email') {
                      return (
                        <div className={styles.emailSubsScription}>
                          <InputUi
                            id={''}
                            type={''}
                            placeholder='Subscribe News'
                            onChange={function (
                              event: SyntheticEvent<Element, Event>
                            ): void {
                              throw new Error('Function not implemented.');
                            }}
                            value={''}
                            classN={styles.subscribeInput}
                          />
                          <ButtonUI
                            isLoading={false}
                            text={'Subscribe'}
                            classN={styles.subscribeButton}
                            onClick={function (): void {
                              throw new Error('Function not implemented.');
                            }}
                          />
                        </div>
                      );
                    }
                    return (
                      <li key={id}>
                        <Link to={path}>{title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.siteCreaterBrand}>
        <p>
          Ⓒ Powered By AMRAM Technolohy
          <span>All Rights reserved</span>
        </p>
        <div className={styles.socialMediaConteiner}>
          <Link
            to={'https://github.com/AmramAnanyan'}
            className={styles.socialMedia}
            style={{ backgroundImage: `url(${githubIcone})` }}
          ></Link>
          <Link
            to={'https://www.linkedin.com/in/amram-ananyan-827a9b222/'}
            className={styles.socialMedia}
            style={{ backgroundImage: `url(${linkedinIcone})` }}
          ></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
