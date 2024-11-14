# GARAX-SERVER

### Service

- npx sequelize-cli model:generate --name Service --attributes idService:string,serviceCategoryId:string,serviceImageId:string,serviceDetailId:string,title:string,alias:string,description:string,isActive:boolean

### ServiceCategory

- npx sequelize-cli model:generate --name ServiceCategory --attributes idServiceCategory:string,title:string,alias:string

### ServiceImage

- npx sequelize-cli model:generate --name ServiceImage --attributes idServiceImage:string,image:string,alt:string

### ServiceDetail

npx sequelize-cli model:generate --name ServiceDetail --attributes idServiceDetail:string,content:text,additionalInfo:string

### Product

npx sequelize-cli model:generate --name Product --attributes idProduct:string,idProductDetail:string,idProductMedia:string,idProductFeedback:string,idBrand:string,nameProduct:string,alias:string,quantity:INTEGER,sold:INTEGER,status:ENUM,isActive:BOOLEAN

### ProductDetail

npx sequelize-cli model:generate --name ProductDetail --attributes idProductDetail:string

### ProductMedia

npx sequelize-cli model:generate --name ProductMedia --attributes idProductDetail:string

### ProductFeedback

npx sequelize-cli model:generate --name ProductFeedback --attributes idProductDetail:string

### Brand

npx sequelize-cli model:generate --name Brand --attributes idProductDetail:string,name:string

### CartProduct - Using by customers

npx sequelize-cli model:generate --name CartProduct --attributes idCartProduct:string,idUser:string,idCartItemsProduct:string,name:string,phone:string,address:string,email:string,cartState:ENUM,countItems:INTEGER

### CartItemsProduct - Using by customers

npx sequelize-cli model:generate --name CartItemsProduct --attributes idCartItemsProduct:string,idCartProduct:string,quantity:INTEGER

<!-- ### CartStaff - Using by staffs in dashboard

npx sequelize-cli model:generate --name CartStaff --attributes idCartStaff:string,idUser:string,idCartItemsStaff:string,cartState:ENUM,countItems:INTEGER -->

<!-- ### CartItemsStaff - Using by customers

npx sequelize-cli model:generate --name CartItemsProduct --attributes idCartItemsStaff:string,idCartStaff:string,quantity:INTEGER -->

### OrderProduct - Using by customers

npx sequelize-cli model:generate --name OrderProduct --attributes idOrderProduct:string,idUser:string,idCartProduct:string,idCartItemsProduct:string,status:ENUM,paymentMethod:ENUM,paymentStatus:ENUM,subTotal:FLOAT,shippingFee:FLOAT,total:FLOAT

<!-- ### OrderItemsProduct - Using by customers

npx sequelize-cli model:generate --name OrderItemsProduct --attributes idOrderProduct:string,idUser:string -->

<!-- ### OrderStaff- Using by staffs in dashboard

npx sequelize-cli model:generate --name OrderStaff --attributes idOrderStaff:string,idUser:string,name:string -->

### Payment - Using by customers

npx sequelize-cli model:generate --name Payment --attributes idPayment:string,idOrderProduct:string,amount:float,currency:ENUM,desc:string
