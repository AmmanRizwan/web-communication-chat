import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Room = sequelize.define(
  "Room",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    expire: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    modelName: "rooms",
    timestamps: true,
  }
)

export { Room };