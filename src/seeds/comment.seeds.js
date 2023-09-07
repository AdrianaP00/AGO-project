const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const comments = require("../api/models/comment.models");

const seedComments = [
  // Comentarios de Usuarios
  {
    text: "¡Excelente trabajo! Realmente impresionado con los resultados.",
    user: "64f1f76422539ea74d29fa28",
    company: ["64f1f81d21503000d6a9d392", "64f1f81d21503000d6a9d393"],
    score: 5,
    jobs: ["64f1f894655fed5d62b74cf0", "64f1f894655fed5d62b74cf1"],
    img: "url_de_la_imagen1",
  },
  {
    text: "Fue un placer trabajar en este proyecto. Los resultados hablan por sí mismos.",
    user: "64f1f76422539ea74d29fa29",
    company: ["64f1f81d21503000d6a9d392", "64f1f81d21503000d6a9d393"],
    score: 3,
    job: ["64f1f894655fed5d62b74cf0", "64f1f894655fed5d62b74cf1"],
    img: "url_de_la_imagen2",
  },
  {
    text: "El equipo hizo un trabajo increíble en esto. Muy contento con el producto final.",
    user: "64f1f76422539ea74d29fa2a",
    company: ["64f1f81d21503000d6a9d392", "64f1f81d21503000d6a9d393"],
    score: 10,
    jobs: ["64f1f894655fed5d62b74cf0", "64f1f894655fed5d62b74cf1"],
    img: "url_de_la_imagen3",
  },
  {
    text: "No puedo creer lo rápido que completaron el proyecto. Altamente recomendados.",
    user: "64f1f76422539ea74d29fa2a",
    company: ["64f1f81d21503000d6a9d392", "64f1f81d21503000d6a9d393"],
    score: 6,
    job: ["64f1f894655fed5d62b74cf0", "64f1f894655fed5d62b74cf1"],
    img: "url_de_la_imagen4",
  },
  {
    text: "¡Bravo! Estoy muy satisfecho con cómo se manejaron las cosas.",
    user: "64f1f76422539ea74d29fa2a",
    company: ["64f1f81d21503000d6a9d392", "64f1f81d21503000d6a9d393"],
    score: 9,
    job: ["64f1f894655fed5d62b74cf0", "64f1f894655fed5d62b74cf1"],
    img: "url_de_la_imagen5",
  },

  // Comentarios de Empresas
  {
    text: "Nuestro equipo se enorgullece de haber entregado este proyecto a tiempo.",
    user: "64f1f76422539ea74d29fa2b",
    company: ["64f1f81d21503000d6a9d392", "64f1f81d21503000d6a9d393"],
    score: 5,
    job: ["64f1f894655fed5d62b74cf0", "64f1f894655fed5d62b74cf1"],
    img: "url_de_la_imagen6",
  },
  {
    text: "La colaboración con nuestro cliente en este proyecto fue excepcional.",
    user: "64f1f76422539ea74d29fa2d",
    company: ["64f1f81d21503000d6a9d392", "64f1f81d21503000d6a9d393"],
    score: 7,
    job: ["64f1f894655fed5d62b74cf0", "64f1f894655fed5d62b74cf1"],
    img: "url_de_la_imagen7",
  },
  {
    text: "Este proyecto fue un verdadero hito para nosotros. ¡Gran trabajo en equipo!",
    user: "64f1f76422539ea74d29fa2d",
    company: ["64f1f81d21503000d6a9d392", "64f1f81d21503000d6a9d393"],
    score: 4,
    job: ["64f1f894655fed5d62b74cf0", "64f1f894655fed5d62b74cf1"],
    img: "url_de_la_imagen8",
  },
  {
    text: "El esfuerzo conjunto de nuestros empleados hizo posible este logro.",
    user: "64f1f76422539ea74d29fa2d",
    company: ["64f1f81d21503000d6a9d392", "64f1f81d21503000d6a9d393"],
    score: 9,
    job: ["64f1f894655fed5d62b74cf0", "64f1f894655fed5d62b74cf1"],
    img: "url_de_la_imagen9",
  },
  {
    text: "Nuestra experiencia en este proyecto refleja nuestra dedicación a la calidad.",
    user: "64f1f76422539ea74d29fa2d",
    company: ["64f1f81d21503000d6a9d392", "64f1f81d21503000d6a9d393"],
    score: 2,
    job: ["64f1f894655fed5d62b74cf0", "64f1f894655fed5d62b74cf1"],
    img: "url_de_la_imagen10",
  },
];

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allComments = await comments.find();
    if (allComments.length > 0) {
      await comments.collection.drop();
      console.log("collection delete");
    }
  })
  .catch((error) => console.log("Retry", error))

  .then(async () => {
    const commentsMap = seedComments.map((user) => new comments(user));
    await comments.insertMany(commentsMap);
    console.log("ok");
  })
  .catch((error) => console.log("Error", error))
  .finally(() => mongoose.disconnect());
