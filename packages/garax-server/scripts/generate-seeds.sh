#!/bin/bash
cd .. && cd src
seeds=("demo-account" "demo-brand" "demo-cartItemsProduct" "demo-cartProduct" "demo-customerDetails" "demo-keyToken" "demo-news" "demo-newsCategory" "demo-order" "demo-orderDetail" "demo-orderProduct" "demo-payment" "demo-product" "demo-productCategory" "demo-productDetail" "demo-productFeedback" "demo-productImage" "demo-productMedia" "demo-service" "demo-serviceCategory" "demo-serviceDetail" "demo-serviceImage")
for seed in "${seeds[@]}"
do
  npx sequelize-cli seed:generate --name $seed
done
