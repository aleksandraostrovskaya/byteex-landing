import styles from './Button.module.css';

function Button({ text, arrow=true }) {
  return (
    <button className={styles.button}>
      <span className={styles.text}>{text}</span>
      {arrow && (
        <span className={styles.icon}>
          <svg
            width='23'
            height='10'
            viewBox='0 0 23 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18.1072 10L23 5.00003L18.1072 0L16.6372 1.5022L19.0205 3.93781L0 3.93781V6.06226L19.0205 6.06226L16.6372 8.4978L18.1072 10Z'
              fill='white'
            />
          </svg>
        </span>
      )}
    </button>
  );
}

export default Button;
