import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import Button from '@/components/button/Button';
import Testimonial from '@/components/testImotional/Testimonial';

export default function Hero({ data }) {
  const avatarUrl = `https:${data.testimonialAvatar.fields.file.url}`;

  return (
    <section className={styles.heroSection}>
      <div className={styles.infoBanner}>
        {data.bannerText.map((text, i) => (
          <span key={i}>
            {text}
            {i !== data.bannerText.length - 1 && (
              <span className={styles.separator}>|</span>
            )}
          </span>
        ))}
      </div>

      <div className={styles.logoContainer}>
        <Link href='/'>
          <Image
            src='/images/Logo.svg'
            alt={'Logo'}
            width={200}
            height={35}
            priority
          />
        </Link>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <h1 className={styles.title}>{data.title}</h1>

          <ul className={styles.list}>
            {data.features.map((item, index) => {
              const { icon, text } = item.fields;
              const imageUrl = `https:${icon.fields.file.url}`;

              return (
                <li key={index} className={styles.listItem}>
                  <Image
                    src={imageUrl}
                    alt={icon.fields.title || 'Feature icon'}
                    width={31}
                    height={31}
                  />
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>

          <Button text={data.buttonText} />
        </div>

        <div className={styles.rightImages}>
          {data.images?.map((image, i) => {
            const imageUrl = `https:${image.fields.file.url}`;

            const isCenter = i === 1;
            const wrapperClass = `${styles.imageWrapper} ${
              isCenter ? styles.center : styles.side
            }`;

            const width = isCenter ? 260 : 209;
            const height = isCenter ? 422 : 316;

            return (
              <div key={i} className={wrapperClass}>
                <Image
                  src={imageUrl}
                  alt={image.fields.title || 'Hero image'}
                  width={width}
                  height={height}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Testimonial
        avatar={avatarUrl}
        name={data.testimonialAuthor}
        quote={data.testimonialQuote}
        stars={5}
        variant='hero'
      />
    </section>
  );
}
