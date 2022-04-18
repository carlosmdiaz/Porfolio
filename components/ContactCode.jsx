import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="https://carlosdiaz-porfolio.vercel.app/" target="_blank" rel="noopener">
          nitinranganath.me
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:carlosdiaz3979@gmail.com"
          target="_blank"
          rel="noopener"
        >
          carlosdiaz3979@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/carlosmdiaz" target="_blank" rel="noopener">
          carlosmdiaz
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/carlos-diaz-b3bbbb165/"
          target="_blank"
          rel="noopener"
        >
          carlosdiaz
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://twitter.com/memelo1020"
          target="_blank"
          rel="noopener"
        >
          memelo1020
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{' '}
        <a
          href="https://www.instagram.com/carlosm.diaz/"
          target="_blank"
          rel="noopener"
        >
          carlosm.diaz
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;telegram:{' '}
        <a href="https://t.me/carlosmdiaz20" target="_blank" rel="noopener">
          carlosmdiaz20
        </a>
        ;
      </p>
      
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
