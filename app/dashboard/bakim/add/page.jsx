"use client";
import { useState } from "react";
import { addProduct } from "../../../lib/actions";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";

const AddProductPage = () => {
  const [bakimdurum, setBakimdurum] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await addProduct(formData);
      // Başarılı form gönderiminden sonra yapılacak işlemler
    } catch (error) {
      console.error("Form gönderimi sırasında bir hata oluştu:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        
        {/* Müşteri Bilgileri */}
        <div className={styles.section}>
          <h2>Müşteri Bilgileri</h2>
          <input type="text" placeholder="Müşteri İsim" name="musteriisim" />
          <select name="tip" id="tip" className={styles.inputField}>
            <option value="general">Müşteri Tipi</option>
            <option value="Bireysel">Bireysel</option>
            <option value="Kurumsal">Kurumsal</option>
          </select>
          <input type="text" placeholder="Telefon" name="phone" />
          <input type="text" placeholder="Telefon 2" name="phonetwo" />
          <input type="text" placeholder="İl" name="il" />
          <input type="text" placeholder="İlçe" name="ilce" />
          <input type="text" placeholder="Adres" name="address" />
          <input type="text" placeholder="Kimlik" name="kimlik" />
        </div>

        {/* Bakım Bilgileri */}
        <div className={styles.section}>
          <h2>Bakım Bilgileri</h2>
          <input type="text" placeholder="Bakım Durum" name="bakimdurum" />
          <input type="date" placeholder="Bakım Gün" name="bakimgun" />
          <input type="text" placeholder="Bakım Adet" name="bakimadet" />
          <input type="text" placeholder="Bakım Dahil" name="bakimdahil" />
          <textarea placeholder="Bakım Açıklama" name="bakimaciklama"></textarea>
          <input type="text" placeholder="Cihaz" name="bakimcihaz" />
          <input type="text" placeholder="Model" name="bakimmodel" />
          <input type="text" placeholder="Seri No" name="bakimserino" />
          <input type="text" placeholder="Adres" name="bakimadres" />
        </div>

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default AddProductPage;
