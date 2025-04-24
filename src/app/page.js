import client from '@/lib/contentful';
import Benefits from '@/sections/benefits/Benefits'
import Hero from '@/sections/hero/Hero';

export default async function HomePage() {
  const [hero, benefits] = await Promise.all([
    client.getEntries({ content_type: 'hero' }),
    client.getEntries({ content_type: 'benefits' }),
  ]);

  const heroData = hero.items[0].fields;
  const benefitsData = benefits.items[0].fields;

  console.log(benefitsData)

  return (
    <>
      <Hero data={heroData} />
      <Benefits data={benefitsData}/>
    </>
  );
}
