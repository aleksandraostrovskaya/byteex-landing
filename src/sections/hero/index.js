import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero({ data }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.infoBanner}>
        <span>
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
        </span>{' '}
        |<span> FREE SHIPPING on orders &gt $200</span> |
        <span> easy 45 day return window</span>
      </div>

      <div className='logo-container'>
        <Link href='/'>
          <Image
            src='/images/Logo.png'
            alt={'Logo'}
            width={200}
            height={35}
            priority
          />
        </Link>
      </div>
      <h1>{data.title}</h1>
      <ul>
        {data.list?.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <button>{data.buttonText}</button>
    </section>
  );
}
