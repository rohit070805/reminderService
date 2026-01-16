'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificationTicket.init({
    subject: DataTypes.STRING,
    content: DataTypes.STRING,
    recepientEmail: DataTypes.STRING,
    status: DataTypes.ENUM,
    notificationTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'NotificationTicket',
  });
  return NotificationTicket;
};