import { fetchDestek } from "../../../lib/data";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import { updateDestek } from "../../../lib/actions";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const destek = await fetchDestek(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateDestek} method="POST" className={styles.form}>
          <input type="hidden" name="id" value={destek._id} />

          {/* Product Details */}
          <div>
            <h3>Ürün Bilgileri</h3>
            <div className={styles.formGroup}>
              <label htmlFor="destekmarka">Marka</label>
              <input
                type="text"
                id="destekmarka"
                name="destekmarka"
                defaultValue={destek.destekmarka}
                className={styles.inputField}
              />

              <label htmlFor="destekmodel">Model</label>
              <input
                type="text"
                id="destekmodel"
                name="destekmodel"
                defaultValue={destek.destekmodel}
                className={styles.inputField}
              />

              <label htmlFor="destekarizakodu">Arıza Kodu</label>
              <input
                type="text"
                id="destekarizakodu"
                name="destekarizakodu"
                defaultValue={destek.destekarizakodu}
                className={styles.inputField}
              />
              <label htmlFor="destekarizakodu">Kategori</label>

<input
                type="text"
                id="destekkategori"
                name="destekkategori"
                defaultValue={destek.destekkategori}
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
