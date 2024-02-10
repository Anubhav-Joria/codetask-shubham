module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        createdAt: true,
        updatedAt: "modifiedAt",
      }
    );
    return User;
  };
  