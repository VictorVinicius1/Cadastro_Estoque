import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../connector";


class Role extends Model{
    declare id:String
    declare name:String

}
Role.init({

    id: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true
      },
      name:{
        type:DataTypes.STRING,
        allowNull:false,
      },
    },
    {
        tableName:'roles',
        underscored:true,
        timestamps: false,
        sequelize
    }
)
export default Role