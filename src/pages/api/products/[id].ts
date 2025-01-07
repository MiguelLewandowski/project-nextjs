import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../database.json";

export default function handles(req: NextApiRequest, res: NextApiResponse) {
  const {id} = req.query

  if(id){
  const product = products.find(prod => prod.id === +id)
  res.status(200).json(product)
  }else{
    res.status(404)
  }

}
