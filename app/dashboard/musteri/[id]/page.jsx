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

          {/* Müşteri Bilgileri */}
          <div>
            <h3>Müşteri</h3>
            <div className={styles.formGroup}>
              <label htmlFor="musteriisim">Müşteri İsmi</label>
              <input
                type="text"
                id="musteriisim"
                name="musteriisim"
                defaultValue={product.musteriisim}
                className={styles.inputField}
              />

              <label htmlFor="tip">Müşteri Tipi</label>
              <select
                name="tip"
                id="tip"
                defaultValue={product.tip}
                className={styles.inputField}
              >
                <option value="general">Genel</option>
                <option value="Bireysel">Bireysel</option>
                <option value="Kurumsal">Kurumsal</option>
              </select>

              <label htmlFor="phone">Telefon</label>
              <input
                type="text"
                id="phone"
                name="phone"
                defaultValue={product.phone}
                className={styles.inputField}
              />
              <label htmlFor="phonetwo">Telefon 2</label>
              <input
                type="text"
                id="phonetwo"
                name="phonetwo"
                defaultValue={product.phonetwo}
                className={styles.inputField}
              />

              <label htmlFor="il">İl</label>
              <input
                type="text"
                id="il"
                name="il"
                defaultValue={product.il}
                className={styles.inputField}
              />
              <label htmlFor="ilce">İlçe</label>
              <input
                type="text"
                id="ilce"
                name="ilce"
                defaultValue={product.ilce}
                className={styles.inputField}
              />
              <label htmlFor="address">Adres</label>
              <textarea
                id="address"
                name="address"
                rows="4"
                defaultValue={product.address}
                className={styles.inputField}
              ></textarea>
              <label htmlFor="kimlik">Kimlik</label>
              <input
                type="text"
                id="kimlik"
                name="kimlik"
                defaultValue={product.kimlik}
                className={styles.inputField}
              />
            </div>
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
