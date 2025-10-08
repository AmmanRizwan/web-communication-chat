import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { ROLE } from "../constants";

const RoomMember = sequelize.define(
  "RoomMember",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    roomId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Room",
        key: "id"
      }
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "User",
        key: "id"
      }
    },
    role: {
      type: DataTypes.ENUM(...Object.values(ROLE)),
      defaultValue: ROLE.GUEST,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    modelName: "room_members"
  }
);

export { RoomMember };