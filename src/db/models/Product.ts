  import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../connector";


class Product extends Model{
    declare id:String
    declare name:String
    declare cost:Number
    declare price:Number
    declare buyer:String
    declare status:String
    declare createat:Date
    declare modifyat:Date
    declare userid:String
}
Product.init({

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
      cost:{
        type:DataTypes.NUMBER,
        allowNull:false
      },
      
      price:{
        type:DataTypes.NUMBER,
        allowNull:false

      },
      buyer:{
        type:DataTypes.STRING,
        allowNull:false
      }
      ,
      status:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      createdAt:{
        type:DataTypes.DATE,
        allowNull:false,
      },
      updatedAt:{
        type:DataTypes.DATE,
        allowNull:false,
      },
      userId:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true,
        references:{model:"users",key:"id"}
      }
    },
    {
        tableName:'products',
        underscored:true,
        timestamps:true,
        sequelize
    }
)
export default Product