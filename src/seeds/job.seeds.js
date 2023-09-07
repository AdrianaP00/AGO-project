const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const jobs = require("../api/models/job.models");

const jobsArray = [
  {
    name: "Desarrollador Web Freelance",
    description:
      "Diseño y desarrollo de sitios web personalizados para clientes.",
    time: "Flexible",
    hourSalary: 30,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775808/proyecto%20final/profesions/pngwing.com_8_t4ytjt.png",
  },
  {
    name: "Asistente Virtual a Tiempo Parcial",
    description:
      "Gestión de correos electrónicos, programación y tareas administrativas.",
    time: "20 horas/semana",
    hourSalary: 15,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693776167/proyecto%20final/profesions/pngwing.com_24_tnpj2v.png",
  },
  {
    name: "Profesor Particular de Matemáticas",
    description:
      "Impartir clases particulares de matemáticas a estudiantes de secundaria.",
    time: "10 horas/semana",
    hourSalary: 25,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693776169/proyecto%20final/profesions/pngwing.com_23_ol405i.png",
  },
  {
    name: "Diseñador Gráfico a Tiempo Completo",
    description:
      "Creación de diseños gráficos para medios impresos y digitales.",
    time: "40 horas/semana",
    hourSalary: 28,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775803/proyecto%20final/profesions/pngwing.com_3_zpebma.png",
  },
  {
    name: "Cuidador de Mascotas a Domicilio",
    description:
      "Cuidado y atención a mascotas en sus hogares durante la ausencia de los dueños.",
    time: "Flexible",
    hourSalary: 20,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775804/proyecto%20final/profesions/pngwing.com_4_xxa4ag.png",
  },
  {
    name: "Redactor de Contenidos Freelance",
    description:
      "Creación de artículos y contenido relevante para blogs y sitios web.",
    time: "Varía según la carga de trabajo",
    hourSalary: 0.08, // 8 centavos por palabra
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775800/proyecto%20final/profesions/pngwing.com_2_cn2to3.png",
  },
  {
    name: "Entrenador Personal de Fitness",
    description:
      "Diseño de programas de ejercicios personalizados y entrenamiento físico.",
    time: "25 horas/semana",
    hourSalary: 40,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775800/proyecto%20final/profesions/pngwing.com_10_joiy1h.png",
  },
  {
    name: "Traductor de Documentos Técnicos",
    description:
      "Traducción precisa de documentos técnicos del inglés al español.",
    time: "20 horas/semana",
    hourSalary: 22,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775799/proyecto%20final/profesions/pngwing.com_13_m28arz.png",
  },
  {
    name: "Consultor de Marketing Digital",
    description:
      "Asesoramiento en estrategias de marketing en línea para pequeñas empresas.",
    time: "30 horas/semana",
    hourSalary: 35,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775804/proyecto%20final/profesions/pngwing.com_12_qoxdse.png",
  },
  {
    name: "Chef",
    description:
      "Preparación y presentación de comidas gourmet en eventos y cenas privadas.",
    time: "Eventual",
    hourSalary: 50,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775800/proyecto%20final/profesions/pngwing.com_11_kj1rqk.png",
  },
  {
    name: "Albañil",
    description: "Trabajo de albañilería y construcción de estructuras.",
    time: "Flexible",
    hourSalary: 25,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775803/proyecto%20final/profesions/pngwing.com_14_g2vf2x.png",
  },
  {
    name: "Carpintero",
    description: "Construcción y reparación de estructuras de madera.",
    time: "Flexible",
    hourSalary: 27,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775805/proyecto%20final/profesions/pngwing.com_15_ja7gfh.png",
  },
  {
    name: "Electricista",
    description: "Instalación y reparación de sistemas eléctricos.",
    time: "Flexible",
    hourSalary: 28,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775802/proyecto%20final/profesions/pngwing.com_16_ebrvk9.png",
  },
  {
    name: "Fontanero",
    description: "Instalación y reparación de sistemas de fontanería.",
    time: "Flexible",
    hourSalary: 26,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775803/proyecto%20final/profesions/pngwing.com_17_xi42at.png",
  },
  {
    name: "Pintor",
    description: "Pintura de interiores y exteriores.",
    time: "Flexible",
    hourSalary: 23,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775801/proyecto%20final/profesions/pngwing.com_18_mp23zu.png",
  },
  {
    name: "Jardinero",
    description: "Mantenimiento y diseño de jardines y paisajes.",
    time: "Flexible",
    hourSalary: 22,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775802/proyecto%20final/profesions/pngwing.com_19_n3d98d.png",
  },
  {
    name: "Yesero",
    description: "Trabajo de yeso en construcción.",
    time: "Flexible",
    hourSalary: 24,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775809/proyecto%20final/profesions/pngwing.com_20_sbtojf.png",
  },
  {
    name: "Techador",
    description: "Instalación y reparación de techos.",
    time: "Flexible",
    hourSalary: 30,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775802/proyecto%20final/profesions/pngwing.com_22_bwl7yk.png",
  },
  {
    name: "Hormigonero",
    description: "Trabajo con hormigón y construcción de estructuras.",
    time: "Flexible",
    hourSalary: 29,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775810/proyecto%20final/profesions/pngwing.com_21_bonsxi.png",
  },
];

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allJobs = await jobs.find();
    if (allJobs.length > 0) {
      await jobs.collection.drop();
      console.log("collection delete");
    }
  })
  .catch((error) => console.log("Retry", error))

  .then(async () => {
    const jobsMap = jobsArray.map((job) => new jobs(job));
    await jobs.insertMany(jobsMap);
    console.log("ok");
  })
  .catch((error) => console.log("Error", error))
  .finally(() => mongoose.disconnect());
