"use server";

import { revalidatePath } from "next/cache";
import { Product, User,Destek } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

// Kullanıcı Ekleme
export const addUser = async (formData) => {
  const {
    username,
    email,
    password,
    pozisyon,
    adres,
    isAdmin,
    isActive,
    telbir,
    teliki,
    il,
    ilce,
    kimlikno,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      pozisyon,
      adres,
      isAdmin,
      isActive,
      telbir,
      teliki,
      il,
      ilce,
      kimlikno,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Kullanıcı Güncelleme
export const updateUser = async (formData) => {
  const {
    id,
    username,
    email,
    password,
    pozisyon,
    adres,
    isAdmin,
    isActive,
    telbir,
    teliki,
    il,
    ilce,
    kimlikno,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      pozisyon,
      adres,
      isAdmin,
      isActive,
      telbir,
      teliki,
      il,
      ilce,
      kimlikno,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Ürün Ekleme

export const addProduct = async (formData) => {
  const {
    bakimdurum,
    bakimgün,
    bakimadet,
    bakimdahil,
    bakimaciklama,
    bakimcihaz,
    bakimmodel,
    bakimserino,
    bakimadres,
    title,
    musaitzaman,
    operatornot,
    cihazmarka,
    cihaztur,
    cihazmodel,
    cihazariza,
    islemadBir,
    islemadIki,
    islemadUc,
    islemtutarBir,
    islemtutarIki,
    islemtutarUc,
    islempersonelBir,
    islempersonelIki,
    islempersonelUc,
    islemdurumBir,
    islemdurumIki,
    islemdurumUc,
    islemaciklamaBir,
    islemaciklamaIki,
    islemaciklamaUc,
    teknisyenBir,
    teknisyenIki,
    teknisyenUc,
    yardimciteknisyenBir,
    yardimciteknisyenIki,
    yardimciteknisyenUc,
    islemgunBir,
    islemgunIki,
    islemgunUc,
    islemsaatBir,
    islemsaatIki,
    islemsaatUc,
    kasaisim,
    odemesekli,
    personel,
    aciklama,
    durum,
    tutar,
    musteriisim,
    tip,
    phone,
    phonetwo,
    il,
    ilce,
    address,
    kimlik,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      bakimdurum,
    bakimgün,
    bakimadet,
    bakimdahil,
    bakimaciklama,
    bakimcihaz,
    bakimmodel,
    bakimserino,
    bakimadres,
      title,
      musaitzaman,
      operatornot,
      cihazmarka,
      cihaztur,
      cihazmodel,
      cihazariza,
      islemadBir,
      islemadIki,
      islemadUc,
      islemtutarBir,
      islemtutarIki,
      islemtutarUc,
      islempersonelBir,
      islempersonelIki,
      islempersonelUc,
      islemdurumBir,
      islemdurumIki,
      islemdurumUc,
      islemaciklamaBir,
      islemaciklamaIki,
      islemaciklamaUc,
      teknisyenBir,
      teknisyenIki,
      teknisyenUc,
      yardimciteknisyenBir,
      yardimciteknisyenIki,
      yardimciteknisyenUc,
      islemgunBir,
      islemgunIki,
      islemgunUc,
      islemsaatBir,
      islemsaatIki,
      islemsaatUc,
      kasaisim,
      odemesekli,
      personel,
      aciklama,
      durum,
      tutar,
      musteriisim,
      tip,
      phone,
      phonetwo,
      il,
      ilce,
      address,
      kimlik,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// Ürün Güncelleme
export const updateProduct = async (formData) => {
  const {
    id,
    bakimdurum,
    bakimgün,
    bakimadet,
    bakimdahil,
    bakimaciklama,
    bakimcihaz,
    bakimmodel,
    bakimserino,
    bakimadres,
    title,
    musaitzaman,
    operatornot,
    cihazmarka,
    cihaztur,
    cihazmodel,
    cihazariza,
    islemadBir,
    islemadIki,
    islemadUc,
    islemtutarBir,
    islemtutarIki,
    islemtutarUc,
    islempersonelBir,
    islempersonelIki,
    islempersonelUc,
    islemdurumBir,
    islemdurumIki,
    islemdurumUc,
    islemaciklamaBir,
    islemaciklamaIki,
    islemaciklamaUc,
    teknisyenBir,
    teknisyenIki,
    teknisyenUc,
    yardimciteknisyenBir,
    yardimciteknisyenIki,
    yardimciteknisyenUc,
    islemgunBir,
    islemgunIki,
    islemgunUc,
    islemsaatBir,
    islemsaatIki,
    islemsaatUc,
    kasaisim,
    odemesekli,
    personel,
    aciklama,
    durum,
    tutar,
    musteriisim,
    tip,
    phone,
    phonetwo,
    il,
    ilce,
    address,
    kimlik,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      bakimdurum,
    bakimgün,
    bakimadet,
    bakimdahil,
    bakimaciklama,
    bakimcihaz,
    bakimmodel,
    bakimserino,
    bakimadres,
      title,
      musaitzaman,
      operatornot,
      cihazmarka,
      cihaztur,
      cihazmodel,
      cihazariza,
      islemadBir,
      islemadIki,
      islemadUc,
      islemtutarBir,
      islemtutarIki,
      islemtutarUc,
      islempersonelBir,
      islempersonelIki,
      islempersonelUc,
      islemdurumBir,
      islemdurumIki,
      islemdurumUc,
      islemaciklamaBir,
      islemaciklamaIki,
      islemaciklamaUc,
      teknisyenBir,
      teknisyenIki,
      teknisyenUc,
      yardimciteknisyenBir,
      yardimciteknisyenIki,
      yardimciteknisyenUc,
      islemgunBir,
      islemgunIki,
      islemgunUc,
      islemsaatBir,
      islemsaatIki,
      islemsaatUc,
      kasaisim,
      odemesekli,
      personel,
      aciklama,
      durum,
      tutar,
      musteriisim,
      tip,
      phone,
      phonetwo,
      il,
      ilce,
      address,
      kimlik,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};





export const addDestek = async (formData) => {
  const {
    destekmarka,
    destekmodel,
     destekarizakodu,
     destekkategori
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newDestek = new Destek({
      destekmarka,
      destekmodel,
       destekarizakodu,
       destekkategori
    });

    await newDestek.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create destek!");
  }

  revalidatePath("/dashboard/bakim");
  redirect("/dashboard/bakim");
};





export const updateDestek = async (formData) => {
  const {
    id,
    destekmarka,
    destekmodel,
    destekarizakodu,
    destekkategori
  } = Object.fromEntries(formData);
  try {
    connectToDB();

    const updateFields = {
      destekmarka,
      destekmodel,
      destekarizakodu,
      destekkategori
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key]
    );

    await Destek.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/destek");
  redirect("/dashboard/destek");
};








// Kullanıcı Silme
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};

// Ürün Silme
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

// Müşteri Silme

















// Kimlik Doğrulama
export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
