CREATE TABLE `Currency` (
  `ID` string,
  `currency` string,
  `desc` string
);

CREATE TABLE `Cart` (
  `ID` string,
  `sessionId` string,
  `userId` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `CartItems` (
  `ID` string,
  `qty` number,
  `cartId` string,
  `productVariantId` string,
  `createAt` datetime,
  `updateAt` datetime,
  FOREIGN KEY (`cartId`) REFERENCES `Cart`(`createAt`)
);

CREATE TABLE `Product` (
  `ID` string,
  `name` string,
  `slug` string,
  `desc` json,
  `views` number,
  `tags` enum,
  `manufacturingDate` bigint,
  `minPrice` number,
  `maxPrice` number,
  `categoryId` string,
  `subCategoryId` string,
  `sub2CategoryId` string,
  `videoId` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `Order` (
  `ID` string,
  `fullname` string,
  `phone` string,
  `isReceiveAtStore` boolean,
  `paymentMethod` enum,
  `paymentStatus` enum,
  `subTotalFromProd` number,
  `shippingFee` number,
  `discount` number,
  `total` number,
  `userId` string,
  `addressId` string,
  `cartId` string,
  `createBy` string,
  `updateBy` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `OtpCode` (
  `ID` string,
  `otp` string,
  `email` string,
  `time` bigint,
  `createAt` datetime
);

CREATE TABLE `Partner` (
  `ID` string,
  `fullName` string,
  `gender` enum,
  `email` string,
  `phone` string,
  `avatar` string,
  `role` json,
  `address` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `Payment` (
  `ID` string,
  `amount` float,
  `desc` string,
  `orderId` string,
  `currencyId` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `ItemPermission` (
  `ID` string,
  `itemKeyAccept` string,
  `itemValueAccept` string,
  `isActive` boolean,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `ProductVariantValues` (
  `ID` string,
  `price` number,
  `oldPrice` number,
  `stock` number,
  `sold` number,
  `sku` string,
  `manufacturingDate` bigint,
  `productId` string,
  `addOverSpecsId` string,
  `addOverDetailSpecsId` string,
  `createBy` string,
  `updateBy` string,
  `createAt` datetime,
  `updateAt` datetime,
  FOREIGN KEY (`productId`) REFERENCES `Product`(`ID`)
);

CREATE TABLE `specificationDetailProduct` (
  `ID` string,
  `groupName` string,
  `groupKey` string,
  `groupValue` string,
  `isOriginalProduct` boolean,
  FOREIGN KEY (`ID`) REFERENCES `ProductVariantValues`(`addOverDetailSpecsId`)
);

CREATE TABLE `Address` (
  `ID` string,
  `type` enum,
  `streetRoad` string,
  `wardOrCommune` string,
  `district` string,
  `city` string,
  `userId` string,
  `create_at` datetime,
  `update_at` datetime
);

CREATE TABLE `ApiKey` (
  `ID` string,
  `key` string,
  `isActive` boolean,
  `groupPermissionId` string,
  `permissionId` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `Permission` (
  `ID` string,
  `keyAccept` string,
  `valueAccept` string,
  `isActive` boolean,
  `createAt` datetime,
  `updateAt` datetime,
  FOREIGN KEY (`keyAccept`) REFERENCES `ApiKey`(`permissionId`),
  FOREIGN KEY (`ID`) REFERENCES `GroupPermission`(`groupValueAccept`)
);

CREATE TABLE `CategoryService` (
  `ID` string,
  `name` string,
  `slug` string,
  `desc` json,
  `isParentCategory` boolean,
  `isActive` boolean,
  `imageId` string,
  `videoId` string,
  `parentId` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `specificationProduct` (
  `ID` string,
  `name` string,
  `key` string,
  `value` string,
  `isOriginalProduct` boolean,
  FOREIGN KEY (`ID`) REFERENCES `specificationDetailProduct`(`groupValue`),
  FOREIGN KEY (`name`) REFERENCES `ProductVariantValues`(`addOverSpecsId`)
);

CREATE TABLE `Booking` (
  `ID` string,
  `name` string,
  `slug` string,
  `desc` json,
  `views` number,
  `tags` enum,
  `manufacturingDate` bigint,
  `minPrice` number,
  `maxPrice` number,
  `categoryId` string,
  `imageId` string,
  `videoId` string,
  `productVariantId` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `KeyToken` (
  `ID` string,
  `privateKey` string,
  `publicKey` string,
  `refreshToken` string,
  `refreshTokenUsed` json,
  `userId` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `Account` (
  `ID` string,
  `userName` string,
  `firstName` string,
  `lastName` string,
  `gender` enum,
  `dob` bigint,
  `email` string,
  `phone` string,
  `avatar` string,
  `password` string,
  `emptyPassword` boolean,
  `googleId` string,
  `pointerId` string,
  `roleId` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `Service` (
  `ID` string,
  `name` string,
  `slug` string,
  `desc` json,
  `views` number,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `Video` (
  `ID` string,
  `directoryPath` string,
  `alt` string,
  `original` string
);

CREATE TABLE `CategoryProduct` (
  `ID` string,
  `name` string,
  `slug` string,
  `desc` json,
  `countProduct` number,
  `isParentCategory` boolean,
  `isActive` boolean,
  `imageId` string,
  `parentId` string,
  `createAt` datetime,
  `updateAt` datetime,
  FOREIGN KEY (`ID`) REFERENCES `CategoryProduct`(`parentId`)
);

CREATE TABLE `Review` (
  `ID` string,
  `unknowUser` json,
  `content` string,
  `star` string,
  `like` number,
  `dislike` number,
  `rep` json,
  `userId` string,
  `productId` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `AccountBehavior` (
  `ID` string,
  `userIdentifier` string,
  `behavior` string,
  `productId` string,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `Image` (
  `ID` string,
  `image` string,
  `coverImage` string,
  `alt` string,
  `original` string,
  `typeSize` enum,
  `typeImage` enum,
  `productId` string,
  `createAt` datetime,
  `updateAt` datetime
);



DROP DATABASE garrax;
CREATE DATABASE garrax;
