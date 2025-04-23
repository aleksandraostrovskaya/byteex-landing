import Image from 'next/image';
import styles from './Testimonial.module.css';

export default function Testimonial({ avatar, name, quote, stars = 5, variant = 'hero' }) {
  return (
    <div className={styles.reviewBlock}>
      <div className={styles.topRow}>
        <Image
          src={avatar}
          alt={name}
          width={39}
          height={39}
          className={styles.avatar}
        />
        <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
          {variant === 'simple' && <div className={styles.stars}> {'★'.repeat(stars)} </div>}
          <p className={styles.name}>{name}</p>
          {variant === 'hero' && (
            <>
              <div className={styles.stars}> {'★'.repeat(stars)} </div>
              <p className={styles.tagline}>One of 500+ 5 Star Reviews Online</p>
            </>
          )}
        </div>
      </div>
      <p className={styles.reviewText}>{quote}</p>
    </div>
  );
}
