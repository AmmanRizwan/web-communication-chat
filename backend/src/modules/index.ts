import { Chat } from "./chat";
import { RoomMember } from "./room_member";
import { Room } from "./room";
import { User } from "./user";
import { Otp } from "./otp";


Room.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE"});
User.hasMany(Room, { foreignKey: "userId", onDelete: "CASCADE"});

Otp.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE"});
User.hasMany(Otp, { foreignKey: "userId", onDelete: "CASCADE"});

Chat.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE"});
User.hasMany(Chat, { foreignKey: "userId", onDelete: "CASCADE" });

Chat.belongsTo(Room, { foreignKey: "roomId", onDelete: "CASCADE"});
Room.hasMany(Chat, { foreignKey: "roomId", onDelete: "CASCADE"});

RoomMember.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE"});
User.hasMany(RoomMember, { foreignKey: "userId", onDelete: "CASCADE"});

RoomMember.belongsTo(Room, { foreignKey: "roomId", onDelete: "CASCADE"});
Room.hasMany(RoomMember, { foreignKey: "roomId", onDelete: "CASCADE"});


export {
  User,
  Room,
  Chat, 
  RoomMember,
  Otp,
}