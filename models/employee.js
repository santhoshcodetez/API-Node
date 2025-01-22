'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee.init({ id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4
  },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.BIGINT,
    position: DataTypes.STRING,
    salary: DataTypes.BIGINT,
    hireDate: DataTypes.INTEGER,
    department: DataTypes.STRING,
    status: DataTypes.STRING,
    customerId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'employee',
  });
  return employee;
};