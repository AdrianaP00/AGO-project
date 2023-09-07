const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Map = require("../api/models/map.models");

const mapArray = [
  { x: 42.8782, y: -8.5449 }, // A Coruña
  { x: 41.6422, y: -0.8837 }, // Zaragoza
  { x: 28.4636, y: -16.2518 }, // San Cristóbal de La Laguna (Tenerife)
  { x: 41.6561, y: -4.7237 }, // Valladolid
  { x: 36.7223, y: -4.3173 }, // Marbella
  { x: 37.3828, y: -5.9733 }, // Dos Hermanas (Sevilla)
  { x: 28.1316, y: -15.4316 }, // Las Palmas de Gran Canaria
  { x: 37.987, y: -1.13 }, // Murcia
  { x: 43.2627, y: -2.9253 }, // Bilbao
  { x: 37.2309, y: -3.7906 }, // Granada
  { x: 39.4699, y: -0.3774 }, // Valencia
  { x: 41.6488, y: -0.8891 }, // Huesca
];

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allMap = await Map.find();
    if (allMap.length > 0) {
      await Map.collection.drop();
      console.log("collection delete");
    }
  })
  .catch((error) => console.log("Retry", error))
  .then(async () => {
    const mapMap = mapArray.map((map) => new Map(map));
    await Map.insertMany(mapMap);
    console.log("ok");
  })
  .catch((error) => console.log("Error", error))
  .finally(() => mongoose.disconnect());
