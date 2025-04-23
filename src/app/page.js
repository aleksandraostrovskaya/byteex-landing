import client from '@/lib/contentful';
import Hero from '@/sections/hero/Hero';

export default async function HomePage() {
  const res = await client.getEntries({ content_type: 'hero' });
  const hero = res.items[0].fields;

  console.log(res)

  return (
    <>
      <Hero data={hero} />
    </>
  );
}
