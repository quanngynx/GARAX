import { NotFoundError } from "@/middlewares"
import { db } from "@/models"

export const getProductById = async ({ id } : { id: string}) => {
  const proId = await db.Product.findByPk(id)

  if(!proId) throw new NotFoundError('error::get Product by _id')

  console.log("_id pro::", proId)
  console.log(proId instanceof db.Product);
  return proId
}
