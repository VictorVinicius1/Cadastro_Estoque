import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../connector";
import Product from "./Product";
import Categorie from "./Categorie";


class ProductCategorie extends Model{
    declare productId:String
    declare categorieId:String

}
ProductCategorie.init({
    productId: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true,
        references:{model:"products",key:"id"}
      },
      categorieId:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true,
        references:{model:"categories",key:"id"}
      }
},
{
    tableName:'products_categories',
    underscored:true,
    timestamps: false,
    sequelize
},
)
Product.belongsToMany(Categorie,{
  foreignKey:'productId',
  otherKey: 'categorieId',
  as:'categories',
  through: ProductCategorie
})
Categorie.belongsToMany(Product,{
  foreignKey:'categorieId',
  otherKey: 'productId',
  as:'products',
  through: ProductCategorie
})

export default ProductCategorie