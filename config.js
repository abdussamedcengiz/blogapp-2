// Veritabani bilgileri kodun icinde duz metin olarak tutulmuyor; .env
// dosyasindan okunuyor. Boylece her gelistirici kendi yerel sifresini
// kullanabiliyor ve sifre depoya girmiyor.
require("dotenv").config();

const config = {
  db: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "blogapp",
  },
};

module.exports = config;
