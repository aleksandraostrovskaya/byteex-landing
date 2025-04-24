'use client';

import styles from './Benefits.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Benefits({ data }) {
  console.log(data);

  return (
    <section className={styles.benefitsSection}>
      <p className={styles.text}>as seen in</p>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={15}
        loop
        autoplay={{ delay: 8000 }}
        pagination={{
          clickable: true,
        }}
        loopFillGroupWithBlank={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            pagination: {
              enabled: true,
            },
          },
          768: {
            slidesPerView: 5,
            pagination: {
              enabled: false,
            },
          },
        }}
      >
        {data.trustLogos.map((item, index) => {
          const { url, details, fileName } = item.fields.file;
          const { width, height } = details.image;

          return (
            <SwiperSlide
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                src={`https:${url}`}
                alt={item.fields.title || fileName}
                width={width}
                height={height}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={styles.contentWrapper}>
        <div className={styles.contentLeft}>
          <h2 className={styles.title}>{data.benefitsTitle}</h2>
          <ul className={styles.list}>
            {data.list.map((item, index) => {
              const { title, description, icon } = item.fields;
              const imageUrl = `https:${icon.fields.file.url}`;
              return (
                <li key={index} className={styles.listItem}>
                  <Image
                    src={imageUrl}
                    alt={icon.fields.title}
                    width={42}
                    height={42}
                  />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.sliderWrapper}>
            <Swiper
              className={styles.mainSlider}
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              {data.sliderImages.map((item, index) => {
                const { url, fileName } = item.fields.file;
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={`https:${url}`}
                      alt={item.fields.title || fileName}
                      fill
                      className={styles.mainImage}
                      style={{ objectFit: 'cover' }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
            <div className={styles.thumbs}>
              {data.sliderImages.map((item, index) => {
                const { url, fileName } = item.fields.file;
                return (
                  <div key={index} className={styles.thumb}>
                    <Image
                      src={`https:${url}`}
                      alt={item.fields.title || fileName}
                      width={31}
                      height={32}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
