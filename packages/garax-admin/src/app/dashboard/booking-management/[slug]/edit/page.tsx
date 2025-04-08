export default async function EditProductsPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slugName = (await params).slug;
    return <div>My edit : {slugName}</div>
  }