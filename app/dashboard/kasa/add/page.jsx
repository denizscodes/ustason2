"use client";
import { addProduct } from "../../../lib/actions";
import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
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
        {/* Kasa Bilgileri */}
        <div className={styles.section}>
          <h2>Kasa Bilgileri</h2>
          <input type="text" placeholder="Kasa İsim" name="kasaisim" required />
          <input type="text" placeholder="Ödeme Şekli" name="odemesekli" />
          <input type="text" placeholder="Personel" name="personel" />
          <input type="text" placeholder="Açıklama" name="aciklama" />
          <input type="text" placeholder="Durum" name="durum" />
          <input type="number" placeholder="Tutar" name="tutar" />
        </div>

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default AddProductPage;
