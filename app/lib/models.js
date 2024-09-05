import mongoose from "mongoose";

const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pozisyon: { type: String },
  adres: { type: String },
  isAdmin: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  telbir: { type: String },
  teliki: { type: String },
  il: { type: String },
  ilce: { type: String },
  kimlikno: { type: String },
});

// Kasa Schema

// Product Schema
const productSchema = new mongoose.Schema(
  {
    title: { type: String },
    musaitzaman: { type: String },
    operatornot: { type: String },
    cihazmarka: { type: String },
    cihaztur: { type: String },
    cihazmodel: { type: String },
    cihazariza: { type: String },
    islemadBir: { type: String },
    islemadIki: { type: String },
    islemadUc: { type: String },

    islemtutarBir: { type: Number },
    islemtutarIki: { type: Number },
    islemtutarUc: { type: Number },

    islempersonelBir: { type: String },
    islempersonelIki: { type: String },
    islempersonelUc: { type: String },

    islemdurumBir: { type: String },
    islemdurumIki: { type: String },
    islemdurumUc: { type: String },

    islemaciklamaBir: { type: String },
    islemaciklamaIki: { type: String },
    islemaciklamaUc: { type: String },

    teknisyenBir: { type: String },
    teknisyenIki: { type: String },
    teknisyenUc: { type: String },

    yardimciteknisyenBir: { type: String },
    yardimciteknisyenIki: { type: String },
    yardimciteknisyenUc: { type: String },

    islemgunBir: { type: Date },
    islemgunIki: { type: Date },
    islemgunUc: { type: Date },

    islemsaatBir: { type: String },
    islemsaatIki: { type: String },
    islemsaatUc: { type: String },

    kasaisim: { type: String },
    odemesekli: { type: String },
    personel: { type: String },
    aciklama: { type: String },
    durum: { type: String },
    tutar: { type: Number },
    musteriisim: { type: String },
    tip: { type: String }, // Unique özelliği kaldırıldı
    phone: { type: String },
    phonetwo: { type: String },
    il: { type: String },
    ilce: { type: String },
    address: { type: String },
    kimlik: { type: String },
    bakimdurum: { type: String },
    bakimgün: { type: Date },
    bakimadet: { type: String },
    bakimdahil: { type: String },
    bakimaciklama: { type: String },
    bakimcihaz: { type: String },
    bakimmodel: { type: String },
    bakimserino: { type: String },
    bakimadres: { type: String },

  },
  { timestamps: true }
);





// Product Schema
const destektSchema = new mongoose.Schema(
  {

    destekmarka: { type: String },
    destekmodel: { type: String },
     destekarizakodu: { type: String },
     destekkategori: { type: String }

  },
  { timestamps: true }
);

// Model Exports
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
  export const Destek =
  mongoose.models.Destek || mongoose.model("Destek", destektSchema);

