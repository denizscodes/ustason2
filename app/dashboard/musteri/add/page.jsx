"use client";
import { useState } from "react";
import { addProduct } from "../../../lib/actions";
import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await addProduct(formData);
      // Success actions after form submission
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Müşteri Bilgileri */}
        <div className={styles.section}>
          <h2>Müşteri Bilgileri</h2>
          <input
            type="text"
            placeholder="Müşteri İsim"
            name="musteriisim"
            required
          />
          <select name="tip" id="tip">
            <option value="general">Müşteri Tipi</option>
            <option value="Bireysel">Bireysel</option>
            <option value="Kurumsal">Kurumsal</option>
          </select>
          <input type="text" placeholder="Telefon" name="phone" />
          <input type="text" placeholder="Telefon" name="phonetwo" />
          <input type="text" placeholder="İl" name="il" />
          <input type="text" placeholder="İlçe" name="ilce" />
          <textarea
            required
            name="address"
            id="address"
            rows="4"
            placeholder="Adres"
          ></textarea>
          <input type="text" placeholder="Kimlik" name="kimlik" />
          <button type="submit">Oluştur</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
