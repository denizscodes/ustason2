"use client";
import { useState } from "react";
import { addDestek } from "../../../lib/actions";
import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await addDestek(formData);
      // Success actions after form submission
      alert("Destek added successfully!");
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Product Details */}
        <div className={styles.section}>
          <h2>Ürün Bilgileri</h2>
          <input
            type="text"
            placeholder="Marka"
            name="destekmarka"
            required
          />
          <input
            type="text"
            placeholder="Model"
            name="destekmodel"
            required
          />
          <input
            type="text"
            placeholder="Arıza Kodu"
            name="destekarizakodu"
            required
          /><input
          type="text"
          placeholder="Marka"
          name="destekkategori"
          required
        />
          <button type="submit">Oluştur</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
