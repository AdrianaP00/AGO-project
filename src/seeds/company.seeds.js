const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Company = require("../api/models/company.models");

const companyArray = [
  {
    name: "Digital Creations",
    business_name: "Tech Innovations LLC",
    vat: "987654321",
    direcction: "5678 Innovation Avenue",
    country: "Canada",
    logo: "logo2.jpg",
    numberEmployes: 25,
    id_user: "64f1f76422539ea74d29fa2e",
    id_avertisement: [
    "64f1f93a37102fbaaf669b80",
    "64f1f93a37102fbaaf669b81",
    "64f1f93a37102fbaaf669b82",
    "64f1f93a37102fbaaf669b83"
    ]
    },
    {
    name: "Tech Wizards",
    business_name: "Wizardry Tech Inc.",
    vat: "543216789",
    direcction: "9876 Wizard Lane",
    country: "United Kingdom",
    logo: "logo3.jpg",
    numberEmployes: 75,
    id_user: "64f1f76422539ea74d29fa2f",
    id_avertisement: [
    "64f1f93a37102fbaaf669b84",
    "64f1f93a37102fbaaf669b85",
    "64f1f93a37102fbaaf669b86",
    "64f1f93a37102fbaaf669b87"
    ]
    },
    {
    name: "Innovative Tech Solutions",
    business_name: "Future Tech Innovators Ltd.",
    vat: "654321987",
    direcction: "4321 Future Road",
    country: "Australia",
    logo: "logo4.jpg",
    numberEmployes: 100,
    id_user: "64f1f76422539ea74d29fa30",
    id_avertisement: [
    "64f1f93a37102fbaaf669b88",
    "64f1f93a37102fbaaf669b89",
    "64f1f93a37102fbaaf669b90",
    "64f1f93a37102fbaaf669b91"
    ]
    },
    {
    name: "Tech Titans",
    business_name: "Titans of Innovation Inc.",
    vat: "123987456",
    direcction: "7890 Titan Street",
    country: "Germany",
    logo: "logo5.jpg",
    numberEmployes: 50,
    id_user: "64f1f76422539ea74d29fa31",
    id_avertisement: [
    "64f1f93a37102fbaaf669b92",
    "64f1f93a37102fbaaf669b93",
    "64f1f93a37102fbaaf669b94",
    "64f1f93a37102fbaaf669b95"
    ]
    },
    {
    name: "Innovation Hub",
    business_name: "Tech Hub Solutions LLC",
    vat: "456789123",
    direcction: "1010 Hub Avenue",
    country: "France",
    logo: "logo6.jpg",
    numberEmployes: 30,
    id_user: "64f1f76422539ea74d29fa32",
    id_avertisement: [
    "64f1f93a37102fbaaf669b96",
    "64f1f93a37102fbaaf669b97",
    "64f1f93a37102fbaaf669b98",
    "64f1f93a37102fbaaf669b99"
    ]
    },
    {
    name: "Tech Pioneers",
    business_name: "Pioneer Tech Innovations Ltd.",
    vat: "789123456",
    direcction: "123 Pioneers Road",
    country: "Spain",
    logo: "logo7.jpg",
    numberEmployes: 60,
    id_user: "64f1f76422539ea74d29fa33",
    id_avertisement: [
    "64f1f93a37102fbaaf669b100",
    "64f1f93a37102fbaaf669b101",
    "64f1f93a37102fbaaf669b102",
    "64f1f93a37102fbaaf669b103"
    ]
    },
    {
    name: "InnovateTech Solutions",
    business_name: "Tech Innovate Inc.",
    vat: "987456321",
    direcction: "567 Innovate Lane",
    country: "Italy",
    logo: "logo8.jpg",
    numberEmployes: 45,
    id_user: "64f1f76422539ea74d29fa34",
    id_avertisement: [
    "64f5cce5ded2d03b751ad732",
    "64f5cce5ded2d03b751ad733",
    "64f5cce5ded2d03b751ad734",
    "64f5cce5ded2d03b751ad735"
    ]
    },
    {
    name: "Tech Masters",
    business_name: "Mastering Tech Solutions Ltd.",
    vat: "321987654",
    direcction: "555 Tech Masters Drive",
    country: "Japan",
    logo: "logo9.jpg",
    numberEmployes: 80,
    id_user: "64f1f76422539ea74d29fa35",
    id_avertisement: [
    "64f5cce5ded2d03b751ad736",
    "64f5cce5ded2d03b751ad737",
    "64f5cce5ded2d03b751ad738",
    "64f5cce5ded2d03b751ad739"
    ]
    },
    {
    name: "Future Tech Innovators",
    business_name: "Tech Innovations of Tomorrow Inc.",
    vat: "654789321",
    direcction: "123 Tomorrow Street",
    country: "South Korea",
    logo: "logo10.jpg",
    numberEmployes: 70,
    id_user: "64f1f76422539ea74d29fa36",
    id_avertisement: [
    "64f5cce5ded2d03b751ad73a",
    "64f5cce5ded2d03b751ad73b",
    "64f5cce5ded2d03b751ad73c",
    "64f5cce5ded2d03b751ad73d"
    ]
    },
    {
    name: "Tech Geniuses",
    business_name: "Genius Tech Solutions Inc.",
    vat: "456321987",
    direcction: "999 Genius Avenue",
    country: "India",
    logo: "logo11.jpg",
    numberEmployes: 55,
    id_user: "64f1f76422539ea74d29fa37",
    id_avertisement: [
    "64f5cce5ded2d03b751ad73e",
    "64f5cce5ded2d03b751ad73f",
    "64f5cce5ded2d03b751ad740",
    "64f5cce5ded2d03b751ad741"
    ]
    },
    {
      name: "Tech Innovations Plus",
      business_name: "Innovative Tech Solutions Plus Inc.",
      vat: "987654123",
      direcction: "5678 Innovation Plus Avenue",
      country: "Mexico",
      logo: "logo12.jpg",
      numberEmployes: 35,
      id_user: "64f1f76422539ea74d29fa38",
      id_avertisement: [
      "64f5cce5ded2d03b751ad742",
      "64f5cce5ded2d03b751ad743",
      "64f5cce5ded2d03b751ad744",
      "64f5cce5ded2d03b751ad745"
      ]
      },
      {
      name: "Tech Visionaries",
      business_name: "Visionary Tech Innovations Ltd.",
      vat: "543219876",
      direcction: "8765 Visionary Road",
      country: "Brazil",
      logo: "logo13.jpg",
      numberEmployes: 90,
      id_user: "64f1f76422539ea74d29fa39",
      id_avertisement: [
      "64f5cce5ded2d03b751ad746",
      "64f5cce5ded2d03b751ad747",
      "64f5cce5ded2d03b751ad748",
      "64f5cce5ded2d03b751ad749"
      ]
      },
      {
      name: "InnovateX Tech",
      business_name: "InnovateX Tech Solutions Inc.",
      vat: "654987321",
      direcction: "4321 InnovateX Lane",
      country: "China",
      logo: "logo14.jpg",
      numberEmployes: 120,
      id_user: "64f1f76422539ea74d29fa40",
      id_avertisement: [
      "64f5cce5ded2d03b751ad74a",
      "64f5cce5ded2d03b751ad732",
      "64f5cce5ded2d03b751ad733",
      "64f5cce5ded2d03b751ad734"
      ]
      },
      {
      name: "TechXcel",
      business_name: "Xcel Tech Innovations Ltd.",
      vat: "123654987",
      direcction: "789 Xcel Street",
      country: "Russia",
      logo: "logo15.jpg",
      numberEmployes: 70,
      id_user: "64f1f76422539ea74d29fa41",
      id_avertisement: [
      "64f5cce5ded2d03b751ad735",
      "64f5cce5ded2d03b751ad736",
      "64f5cce5ded2d03b751ad737",
      "64f5cce5ded2d03b751ad738"
      ]
      },
      {
      name: "Tech Innovate Pro",
      business_name: "Pro Tech Innovations Inc.",
      vat: "789123654",
      direcction: "1234 Pro Lane",
      country: "South Africa",
      logo: "logo16.jpg",
      numberEmployes: 45,
      id_user: "64f1f76422539ea74d29fa42",
      id_avertisement: [
      "64f5cce5ded2d03b751ad739",
      "64f5cce5ded2d03b751ad73a",
      "64f5cce5ded2d03b751ad73b",
      "64f5cce5ded2d03b751ad73c"
      ]
      },
      {
      name: "Tech Innovations Pro",
      business_name: "Pro Innovations Tech Ltd.",
      vat: "321789456",
      direcction: "555 Pro Innovations Drive",
      country: "Singapore",
      logo: "logo17.jpg",
      numberEmployes: 60,
      id_user: "64f1f76422539ea74d29fa43",
      id_avertisement: [
      "64f1f93a37102fbaaf669b140",
      "64f1f93a37102fbaaf669b141",
      "64f1f93a37102fbaaf669b142",
      "64f1f93a37102fbaaf669b143"
      ]
      },
      {
      name: "Future Innovate Tech",
      business_name: "Innovate Tech of Tomorrow Inc.",
      vat: "654321789",
      direcction: "123 Tomorrow Pro Street",
      country: "New Zealand",
      logo: "logo18.jpg",
      numberEmployes: 55,
      id_user: "64f1f76422539ea74d29fa44",
      id_avertisement: [
      "64f5cce5ded2d03b751ad73d",
      "64f5cce5ded2d03b751ad73e",
      "64f5cce5ded2d03b751ad73f",
      "64f5cce5ded2d03b751ad740"
      ]
      },
      {
      name: "Tech Geniuses Pro",
      business_name: "Pro Genius Tech Solutions Inc.",
      vat: "456789123",
      direcction: "999 Pro Genius Avenue",
      country: "Netherlands",
      logo: "logo19.jpg",
      numberEmployes: 85,
      id_user: "64f1f76422539ea74d29fa45",
      id_avertisement: [
      "64f5cce5ded2d03b751ad741",
      "64f5cce5ded2d03b751ad742"
      ]
      },
      {
      name: "Tech Solutions Pro",
      business_name: "Pro Solutions Tech Innovations Ltd.",
      vat: "987123654",
      direcction: "789 Pro Solutions Street",
      country: "Switzerland",
      logo: "logo20.jpg",
      numberEmployes: 40,
      id_user: "64f1f76422539ea74d29fa46",
      id_avertisement: [
      "64f1f93a37102fbaaf669b152",
      "64f1f93a37102fbaaf669b153",
      "64f1f93a37102fbaaf669b154",
      "64f1f93a37102fbaaf669b155"
      ]
      },
      {
      name: "Tech Prodigies",
      business_name: "Prodigy Tech Solutions Inc.",
      vat: "123987654",
      direcction: "1010 Prodigy Avenue",
      country: "Sweden",
      logo: "logo21.jpg",
      numberEmployes: 65,
      id_user: "64f1f76422539ea74d29fa47",
      id_avertisement: [
      "64f5cce5ded2d03b751ad743",
      "64f5cce5ded2d03b751ad744",
      "64f5cce5ded2d03b751ad745",
      "64f5cce5ded2d03b751ad746"
      ]
      }
];

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allCompany = await Company.find();
    if (allCompany.length > 0) {
      await Company.collection.drop();
      console.log("collection delete");
    }
  })
  .catch((error) => console.log("Retry", error))

  .then(async () => {
    const CompanyMap = companyArray.map((company) => new Company(company));
    await Company.insertMany(CompanyMap);
    console.log("ok");
  })
  .catch((error) => console.log("Error", error))
  .finally(() => mongoose.disconnect());
