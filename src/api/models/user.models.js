const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, requires: true, trim: true, minLength: [3, "El nombre necesita al menos 3 caracteres"], maxLength: [   30,   "Nombre demasiado largo, debe tener menos de 30 caracteres",
      ],
    },
    age: { type: Number, requires: false },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: false },
    address: { type: String, required: false },
    specialization: [
      { type: Schema.Types.ObjectId, required: false, ref: "job" },
    ], //siendo usuario, puedes ofrecer hasta 3 servicios por si te quires promocionar
    yearsOfExperience: { type: Date, required: false },
    comments: [
      { type: Schema.Types.ObjectId, required: false, ref: "comment" },
    ],
    contacts: [{ type: Schema.Types.ObjectId, required: false, ref: "user" }],
    salary: { type: Number, required: false },
    availability: [{ type: String, required: false }],
    favoriteCompany: [
      { type: Schema.Types.ObjectId, required: false, ref: "company" },
    ], //para hacer lista de companias o trabajadores favoritos
    role: { type: String, enum: ["ROLE_USER", "ROLE_COMPANY", "ROLE_ADMIN"] },
    companyTypes: [
      { type: String, enum: ["SL", "SA", "SAL", "CB", "SCOL", "SCOM", "SCOR"] },
    ], //añadido tipo de empresa, para que al elegir rol de company al regisrrarte, especifiques qué tipo de empresa vas a crear luego y se pasa el parámetro.
    img: {
      type: String,
      requires: false,
      default:
        "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693542647/proyecto%20final/userDefault.png",
    },
    petitions: [{ type: Schema.Types.ObjectId, required: false, ref: "form" }],
    confirmed: { type: Boolean, default: false },
  },
  {
    collection: "user",
    toJSON: {
      transform: (doc, ret) => {
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const user = mongoose.model("user", userSchema);
module.exports = user;
