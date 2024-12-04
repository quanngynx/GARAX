export default async function EditProductsPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slugName = (await params).slug;
    return (
        <div className="">
            <div>My details: {slugName}</div>
        </div>
    )
  }