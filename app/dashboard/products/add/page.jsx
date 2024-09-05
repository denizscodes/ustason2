"use client";
import { useState } from "react";
import { addProduct } from "../../../lib/actions";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";

const AddProductPage = () => {
  const [islemdurumBir, setislemdurumBir] = useState("");

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
        {/* Ürün Bilgileri */}
        <div className={styles.section}>
          <h2>Ürün Bilgileri</h2>
          <input type="text" placeholder="Başlık" name="title" />
          <input type="text" placeholder="Uygun Zaman" name="musaitzaman" />
          <input type="text" placeholder="Operatör Notu" name="operatornot" />
          <input type="text" placeholder="Cihaz Marka" name="cihazmarka" />
          <input type="text" placeholder="Cihaz Türü" name="cihaztur" />
          <input type="text" placeholder="Cihaz Model" name="cihazmodel" />
          <input type="text" placeholder="Cihaz Arıza" name="cihazariza" />
        </div>

        {/* İşlem 1 Bilgileri */}
        <div className={styles.section}>
          <h2>İşlem 1 Bilgileri</h2>
          <select
            name="islemdurumBir"
            value={islemdurumBir}
            onChange={(e) => setislemdurumBir(e.target.value)}
          >
            <option value="">İşlem Adı Seçin</option>
            <option value="Yerinde Bakım Yapıldı">Yerinde Bakım Yapıldı</option>
            <option value="Teknisyen Yönlendir">Teknisyen Yönlendir</option>
            <option value="Atölyeye Alındı">Atölyeye Alındı</option>
            <option value="Müşteri İptal Etti">Müşteri İptal Etti</option>
            <option value="Fiyatta Anlaşılamadı">Fiyatta Anlaşılamadı</option>
            <option value="Haber Verecek">Haber Verecek</option>
          </select>

          {islemdurumBir === "Teknisyen Yönlendir" && (
            <>
              <input type="text" placeholder="Teknisyen" name="teknisyenBir" />
              <input
                type="text"
                placeholder="Yardımcı Teknisyen"
                name="yardimciteknisyenBir"
              />
              <input type="date" placeholder="İşlem Gün" name="islemgunBir" />
              <input type="text" placeholder="İşlem Saat" name="islemsaatBir" />
            </>
          )}
          {islemdurumBir === "Yerinde Bakım Yapıldı" && (
            <>
              <input
                type="text"
                placeholder="Açıklama"
                name="islemaciklamaBir"
              />
              <input
                type="number"
                placeholder="İşlem Tutarı"
                name="islemtutarBir"
              />
            </>
          )}
          {islemdurumBir === "Atölyeye Alındı" && (
            <>
              <input
                type="text"
                placeholder="Açıklama"
                name="islemaciklamaBir"
              />
              <input
                type="number"
                placeholder="İşlem Tutarı"
                name="islemtutarBir"
              />
              <input type="date" placeholder="İşlem Gün" name="islemgunBir" />
            </>
          )}
          {islemdurumBir === "Müşteri İptal Etti" && (
            <>
              <input
                type="text"
                placeholder="Açıklama"
                name="islemaciklamaBir"
              />
            </>
          )}
          {islemdurumBir === "Fiyatta Anlaşılamadı" && (
            <>
              <input
                type="text"
                placeholder="Açıklama"
                name="islemaciklamaBir"
              />
            </>
          )}
          {islemdurumBir === "Haber Verecek" && (
            <>
              <input
                type="text"
                placeholder="Açıklama"
                name="islemaciklamaBir"
              />
            </>
          )}
        </div>

        {/* Kasa Bilgileri */}
        <div className={styles.section}>
          <h2>Kasa Bilgileri</h2>
          <input type="text" placeholder="Kasa İsim" name="kasaisim" />
          <input type="text" placeholder="Ödeme Şekli" name="odemesekli" />
          <input type="text" placeholder="Personel" name="personel" />
          <input type="text" placeholder="Açıklama" name="aciklama" />
          <input type="text" placeholder="Durum" name="durum" />
          <input type="number" placeholder="Tutar" name="tutar" />
        </div>

        {/* Müşteri Bilgileri */}
        <div className={styles.section}>
          <h2>Müşteri Bilgileri</h2>
          <input type="text" placeholder="Müşteri İsim" name="musteriisim" />
          <select name="tip" id="tip" className={styles.inputField}>
            <option value="general">Müşteri Tipi</option>
            <option value="Bireysel">Bireysel</option>
            <option value="Kurumsal">Kurumsal</option>
          </select>{" "}
          <input type="text" placeholder="Telefon" name="phone" />
          <input type="text" placeholder="Telefon 2" name="phonetwo" />
          <input type="text" placeholder="İl" name="il" />
          <input type="text" placeholder="İlçe" name="ilce" />
          <input type="text" placeholder="Adres" name="address" />
          <input type="text" placeholder="Kimlik" name="kimlik" />
        </div>

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default AddProductPage;
