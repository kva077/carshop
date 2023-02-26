// 1. У любого пользователя будет в базе данных как минимум categories
// 2. Они равны mock данным

const Part = require("../models/Part");
const partsMock = require("../mock/parts.json");
const Category = require("../models/Category");
const categoryMock = require("../mock/category.json");

module.exports = async () => {
    const parts = await Part.find();
    if (parts.length !== partsMock.length) {
        await createInitialEntity(Part, partsMock);
    }
    const category = await Category.find();
    if (category.length !== categoryMock.length) {
        await createInitialEntity(Category, categoryMock);
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async (item) => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            } catch (e) {
                return e;
            }
        })
    );
}
