import Link from "next/link";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchProductKasas } from "../../lib/data";
import { deleteProduct } from "../../lib/actions";

const KasaPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const { count, products } = await fetchProductKasas(q);

  // Calculate total amount without filtering products
  const totalAmount = products.reduce((total, product) => {
    const amount = parseFloat(product.tutar) || 0;
    return total + amount;
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Ara" />
        <Link href="/dashboard/kasa/add">
          <button className={styles.addButton}>Oluştur</button>
        </Link>
      </div>
      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>KASA İSİM</div>
          <div className={styles.tableHeaderCell}>ÖDEME ŞEKLİ</div>
          <div className={`${styles.tableHeaderCell} hide-mobile`}>PERSONEL</div>
          <div className={`${styles.tableHeaderCell} hide-mobile`}>AÇIKLAMA</div>
          <div className={`${styles.tableHeaderCell} hide-mobile`}>DURUM</div>
          <div className={styles.tableHeaderCell}>TUTAR</div>
          <div className={styles.tableHeaderCell}>İŞLEMLER</div>
        </div>
        <div className={styles.tableBody}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className={styles.tableRow}>
                <div className={styles.tableCell}><Link href={`/dashboard/kasa/${product.id}`}>
                  <strong>{product.kasaisim}</strong>    </Link>
                </div>
                <div className={styles.tableCell}>
                  <p>{product.odemesekli}</p>
                </div>
                <div className={`${styles.tableCell} hide-mobile`}>
                  <p>{product.personel}</p>
                </div>
                <div className={`${styles.tableCell} hide-mobile`}>
                  <p>{product.aciklama}</p>
                </div>
                <div className={`${styles.tableCell} hide-mobile`}>
                  <p>{product.durum}</p>
                </div>
                <div className={styles.tableCell}>
                  <p>{product.tutar}</p>
                </div>
                <div className={styles.tableCell}>
                  <div className={styles.buttons}>
                    

                    <form action={deleteProduct} method="POST">
                      <input type="hidden" name="id" value={product.id} />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Sil
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noData}>
              Arama kriterlerine uygun kasa bulunmuyor.
            </div>
          )}
        </div>
      </div>
      <div className={styles.totalAmount}>
        Toplam Tutar: {totalAmount.toFixed(2)} ₺
      </div>
    </div>
  );
};

export default KasaPage;
