import client from '@/lib/contentful';
import Hero from '@/sections/hero';

export default async function HomePage() {
  const res = await client.getEntries({ content_type: 'hero' });
  const hero = res.items[0].fields;

  return (
    <>
      <Hero data={hero} />
    </>
  );
}
