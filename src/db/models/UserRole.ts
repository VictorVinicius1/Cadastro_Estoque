import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../connector";
import User from "./User";
import Role from "./Role";


class UserRole extends Model{
    declare userId:String
    declare roleId:String
}
UserRole.init({
    userId: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true,
        references:{model:"users",key:"id"}
    },
      roleId:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true,
        references:{model:"roles",key:"id"}
      }
},
{
    tableName:'users_roles',
    underscored:true,
    timestamps: false,
    sequelize
})
User.belongsToMany(Role,{
    foreignKey:'userId',
    otherKey: 'roleId',
    as:'roles',
    through: UserRole
  })
  Role.belongsToMany(User,{
    foreignKey:'roleId',
    otherKey: 'userId',
    as:'users',
    through: UserRole
  })

export default UserRole