const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '../config/config.json'))[env];
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
const Account = require('./account')(sequelize, Sequelize.DataTypes);
const ApiKey = require('./apikey')(sequelize, Sequelize.DataTypes);
const KeyToken = require('./keytoken')(sequelize, Sequelize.DataTypes);
const OtpCode = require('./otpcode')(sequelize, Sequelize.DataTypes);
const ItemPermission = require('./itempermission')(sequelize, Sequelize.DataTypes);
const Permission = require('./permission')(sequelize, Sequelize.DataTypes);

const Product = require('./product')(sequelize, Sequelize.DataTypes);

const Address = require('./address')(sequelize, Sequelize.DataTypes);
// const ProductCategory = require('./productCategory')(sequelize, Sequelize.DataTypes);
// const ProductDetail = require('./productDetail')(sequelize, Sequelize.DataTypes);
// const ProductFeedback = require('./productFeedback')(sequelize, Sequelize.DataTypes);
// const ProductImage = require('./productImage')(sequelize, Sequelize.DataTypes);
// const ProductMedia = require('./productMedia')(sequelize, Sequelize.DataTypes);
// const Brand = require('./brand')(sequelize, Sequelize.DataTypes);

// const Cart = require('./cartProduct')(sequelize, Sequelize.DataTypes);
// const CartItemsProduct = require('./cartItemsProduct')(sequelize, Sequelize.DataTypes);

// const Service = require('./service')(sequelize, Sequelize.DataTypes);
// const ServiceCategory = require('./serviceCategory')(sequelize, Sequelize.DataTypes);
// const ServiceDetail = require('./serviceDetail')(sequelize, Sequelize.DataTypes);
// const ServiceMedia = require('./serviceMedia')(sequelize, Sequelize.DataTypes);

// const Order = require('./order')(sequelize, Sequelize.DataTypes);
// const OrderProduct = require('./orderProduct')(sequelize, Sequelize.DataTypes);
// const Payment = require('./payment')(sequelize, Sequelize.DataTypes);

const db = {
  Account,
  ApiKey,
  KeyToken,
  OtpCode,
  ItemPermission,
  Permission,

  Product,

  Address
};

Account.associate(db);
ApiKey.associate(db);
KeyToken.associate(db);
OtpCode.associate(db);
ItemPermission.associate(db);
Permission.associate(db);

Product.associate(db);

Address.associate(db);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
