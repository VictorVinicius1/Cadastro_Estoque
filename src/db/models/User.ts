import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../connector";


class User extends Model{
    declare id:String
    declare username:Number
    declare name:String
    declare password:string
    declare status:boolean
}
User.init({

    id: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true
    },
      username:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
      },
      name:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      password:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
        allowNull:false
      }
    },
    {
        tableName:'users',
        underscored:true,
        timestamps: false,
        sequelize
    }
)
export default User