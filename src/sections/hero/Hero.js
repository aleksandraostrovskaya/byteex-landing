'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import Button from '@/components/button/Button';
import Testimonial from '@/components/testImotional/Testimonial';
import useIsMobile from '@/hooks/useIsMobile';

export default function Hero({ data }) {
  const avatarUrl = `https:${data.testimonialAvatar.fields.file.url}`;

  const isMobile = useIsMobile();

  const renderImages = () =>
    data.heroImages?.map((item, i) => {
      const imageField = item.fields;
      const isCenter = i === 1;
      const wrapperClass = `${styles.imageWrapper} ${
        isCenter ? styles.center : styles.side
      }`;

      const mobileUrl = imageField.mobileImage?.fields?.file?.url;
      const largeUrl = imageField.largeImage?.fields?.file?.url;

      const imageUrl = isMobile ? mobileUrl : largeUrl;
      if (!imageUrl) return null;

      const width = isMobile ? (isCenter ? 136 : 109) : isCenter ? 260 : 209;
      const height = isMobile ? (isCenter ? 221 : 165) : isCenter ? 422 : 316;

      return (
        <div key={i} className={wrapperClass}>
          <Image
            src={`https:${imageUrl}`}
            alt={
              imageField.largeImage?.fields?.title ||
              imageField.mobileImage?.fields?.title ||
              'Hero image'
            }
            width={width}
            height={height}
          />
        </div>
      );
    });

  return (
    <section className={styles.heroSection}>
      <div className={styles.infoBanner}>
        {data.bannerText.map((text, i) => {
          const isShipping = text.includes('FREE SHIPPING');
          return (
            <span key={i} className={!isShipping ? styles.hideOnMobile : ''}>
              {text}
              {i !== data.bannerText.length - 1 && (
                <span className={styles.separator}>|</span>
              )}
            </span>
          );
        })}
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

          <div className={`${styles.rightImages} ${styles.mobileOnly}`}>
            {renderImages()}
          </div>

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

          <div className={styles.buttonContainer}>
            <Button text={data.buttonText} />
          </div>
        </div>

        <div className={`${styles.rightImages} ${styles.desktopOnly}`}>
          {renderImages()}
        </div>
      </div>

      <div className={styles.testimonialContainer}>
        <Testimonial
          avatar={avatarUrl}
          name={data.testimonialAuthor}
          quote={data.testimonialQuote}
          stars={5}
          variant='hero'
        />
      </div>
    </section>
  );
}
