const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'Product',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false
            },
            precio: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }
    )
}