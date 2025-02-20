# GARAX-SERVER

### Acount

- npx sequelize-cli model:generate --name Account --attributes userName:string,lastName:string,gender:enum,dob:bigint,email:string,phone:string,avatar:string,password:string,emptyPassword:string,googleId:string,pointerId:string,roleId:string

### OTP code



### Permission

npx sequelize-cli model:generate --name Permission --attributes keyAccept:string,valueAccept:string,isActive:boolean

### ItemPermission

npx sequelize-cli model:generate --name ItemPermission --attributes itemKeyAccept:string,itemValueAccept:string,isActive:boolean

### KeyToken

- npx sequelize-cli model:generate --name KeyToken --attributes privateKey:string,publicKey:string,refreshToken:string,refreshTokenUsed:json,userId:string

### ApiKey

npx sequelize-cli model:generate --name ApiKey --attributes key:string,isActive:boolean,groupPermissionId:string,permissionId:string

### Address

npx sequelize-cli model:generate --name Address --attributes type:enum,streetRoad:string,wardOrCommune:string,district:string,city:string,userId:string

### Currency

npx sequelize-cli model:generate --name Currency --attributes currency:string,desc:string

### Image

npx sequelize-cli model:generate --name Image --attributes image:string,coverImage:string,alt:string,original:string,typeSize:enum,typeImage:string,productId:string

### Video

npx sequelize-cli model:generate --name Video --attributes directoryPath:string,alt:string,original:string

### Service

- npx sequelize-cli model:generate --name Service --attributes idService:string,serviceCategoryId:string,serviceImageId:string,serviceDetailId:string,title:string,alias:string,description:string,isActive:boolean

### ServiceCategory

- npx sequelize-cli model:generate --name ServiceCategory --attributes idServiceCategory:string,title:string,alias:string

### ServiceImage

- npx sequelize-cli model:generate --name ServiceImage --attributes idServiceImage:string,image:string,alt:string

### ServiceDetail

npx sequelize-cli model:generate --name ServiceDetail --attributes idServiceDetail:string,content:text,additionalInfo:string

### Product

npx sequelize-cli model:generate --name Product --attributes name:string,slug:string,desc:json,views:integer,tags:enum,manufacturingDate:bigint,minPrice:integer,maxPrice:integer,categoryId:string,subCategoryId:string,sub2CategoryId:string,sub3CategoryId:string,videoId:string,idBrand:string,status:enum,createBy:string,updateBy:string

### Product Variant

npx sequelize-cli model:generate --name ProductVariantValues --attributes price:integer,oldPrice:integer,stock:integer,sold:integer,sku:string,manufacturingDate:bigint,productId:string,addOverSpecsId:string,addOverDetailSpecsId:string,createBy:string,updateBy:string

### specificationDetailProduct

npx sequelize-cli model:generate --name SpecificationDetailProduct --attributes groupName:string,groupKey:string,groupValue:string,isOriginalProduct:boolean

### specificationProduct

npx sequelize-cli model:generate --name SpecificationProduct --attributes name:string,key:string,value:string,isOriginalProduct:boolean

### CategoryProduct

npx sequelize-cli model:generate --name CategoryProduct --attributes name:string,slug:string,desc:json,countProduct:integer,isParentCategory:boolean,isActive:boolean,imageId:string,parentId:string

### Brand

npx sequelize-cli model:generate --name Brand --attributes idProductDetail:string,name:string

### Cart

npx sequelize-cli model:generate --name Cart --attributes sessionId:string,userId:string

### CartItems

npx sequelize-cli model:generate --name CartItems --attributes qty:integer,cartId:string,productVariantId:string

### OrderProduct - Using by customers

npx sequelize-cli model:generate --name OrderProduct --attributes idOrderProduct:string,idUser:string,idCartProduct:string,idCartItemsProduct:string,status:ENUM,paymentMethod:ENUM,paymentStatus:ENUM,subTotal:FLOAT,shippingFee:FLOAT,total:FLOAT

### OrderItemsProduct - Using by customers

npx sequelize-cli model:generate --name Order --attributes fullname:string,phone:string,isReceiveAtStore:boolean,paymentMethod:enum,paymentStatus:enum,subTotalFromProd:float,shippingFee:float,discount:float,total:float,userId:string,addressId:string,cartId:string,createBy:string,updateBy:string

<!-- ### OrderStaff- Using by staffs in dashboard

npx sequelize-cli model:generate --name OrderStaff --attributes idOrderStaff:string,idUser:string,name:string -->

### Payment - Using by customers

npx sequelize-cli model:generate --name Payment --attributes amount:string,desc:string,orderId:string,currencyId:string

# Category systems

1. Product

- level 1: multi brand
- level 2: multi typeof car
- level 3: multi model car
- level 4: multi typeof model car

2. Service:

- level 1: multi service
- level 2: multi package

[design-api](https://hocspringboot.net/2020/10/26/mot-so-nguyen-tac-thiet-ke-api/?fbclid=IwY2xjawHDr6BleHRuA2FlbQIxMAABHTisRKr6fTya628moBSRaWnrMtXd22DISP715WRVBwmiR5FloOtaVacf2w_aem_rgxt8HaamS80eu1bctU8YQ#11_HTTP_status_code_va_error_message)
