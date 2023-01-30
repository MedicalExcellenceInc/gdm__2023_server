const path = require('path');
const Sequelize = require('sequelize');
const fs = require('fs');
const basename = path.basename(__filename);
const db = {};

console.log("==============================================");
const NODE_ENV = process.env.NODE_ENV;
const config = require(__dirname + '/../config/database.json')[NODE_ENV];
console.log('## NODE_ENV: ' + NODE_ENV + '로 실행중');
const sequelize = new Sequelize(config.database, config.username, config.password, config);
console.log("## DB 접속정보");
console.log("- host: " + sequelize.config.host);
console.log("- database: " + sequelize.config.database);
console.log("- username: " + sequelize.config.username);
console.log("==============================================");

fs
  .readdirSync(__dirname)
  .filter(file => { return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'); })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });
Object.keys(db).forEach(modelName => {  if (db[modelName].associate) { db[modelName].associate(db); } });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize
.authenticate()
.then(() => {  console.log('connection has been established successfully.');})
.catch(err => { console.log('unable to connect to the database', err); });


// objects
db.gdm = require('./gdm')(sequelize, Sequelize);



db.secret = '(9*)5$&!3%^0%^@@2$1!#5@2!4';
module.exports = db;
