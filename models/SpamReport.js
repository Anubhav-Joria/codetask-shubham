module.exports = (sequelize, DataTypes) => {
    const SpamReport = sequelize.define('SpamReport', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull: false
        }
      });
        
    return SpamReport;
  };
  