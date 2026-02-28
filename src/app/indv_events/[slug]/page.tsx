export default async function IndvEvents({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    console.log('params:', {slug});
  return (
    <>
      <div>{slug}</div>
    </>
  );
}