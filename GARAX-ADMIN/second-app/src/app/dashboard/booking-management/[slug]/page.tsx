export default async function EditBookingPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slugName = (await params).slug;
    return <div>My details: {slugName}</div>
  }