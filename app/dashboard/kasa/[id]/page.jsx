import { fetchProduct } from "../../../lib/data";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import { updateProduct } from "../../../lib/actions";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateProduct} method="POST" className={styles.form}>
          <input type="hidden" name="id" value={product._id} />

          {/* Kasa Bilgileri */}
          <div>
            <h3>Kasa Bilgileri</h3>
            <div className={styles.formGroup}>
              <label htmlFor="kasaisim">Kasa İsim</label>
              <input
                type="text"
                id="kasaisim"
                name="kasaisim"
                defaultValue={product.kasaisim}
                className={styles.inputField}
              />
              <label htmlFor="odemesekli">Ödeme Şekli</label>
              <input
                type="text"
                id="odemesekli"
                name="odemesekli"
                defaultValue={product.odemesekli}
                className={styles.inputField}
              />
              <label htmlFor="personel">Personel</label>
              <input
                type="text"
                id="personel"
                name="personel"
                defaultValue={product.personel}
                className={styles.inputField}
              />
              <label htmlFor="aciklama">Açıklama</label>
              <input
                type="text"
                id="aciklama"
                name="aciklama"
                defaultValue={product.aciklama}
                className={styles.inputField}
              />
              <label htmlFor="durum">Durum</label>
              <input
                type="text"
                id="durum"
                name="durum"
                defaultValue={product.durum}
                className={styles.inputField}
              />
              <label htmlFor="tutar">Tutar</label>
              <input
                type="number"
                id="tutar"
                name="tutar"
                defaultValue={product.tutar}
                className={styles.inputField}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <button type="submit" className={styles.button}>
              Güncelle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
