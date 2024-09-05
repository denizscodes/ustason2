import Link from "next/link";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchProducts } from "../../lib/data";
import { deleteProduct } from "../../lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

  // Filter products by customer name only and exclude those without a customer name
  const filteredProducts = products.filter(
    (product) =>
      product.musteriisim && // Ensure the product has a customer name
      product.musteriisim.toLowerCase().includes(q.toLowerCase()) // Filter by customer name
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Ara" />
        <Link href="/dashboard/musteri/add">
          <button className={styles.addButton}>Oluştur</button>
        </Link>
      </div>
      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>MÜŞTERİ ADI</div>
          <div className={styles.tableHeaderCell}>TELEFONLAR</div>
          <div className={`${styles.tableHeaderCell} hide-mobile`}>ADRES</div>
          <div className={styles.tableHeaderCell}>İŞLEMLER</div>
        </div>
        <div className={styles.tableBody}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className={styles.tableRow}>
                <div className={styles.tableCell}>
                  <Link href={`/dashboard/musteri/${product.id}`}>
                    <strong>{product.musteriisim}</strong>
                  </Link>
                </div>
                <div className={styles.tableCell}>
                  <p>{product.phone}</p>
                  <p>{product.phonetwo}</p>
                </div>
                <div className={`${styles.tableCell} hide-mobile`}>
                  <p>{product.address}</p>
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
              Arama kriterlerine uygun müşteri bulunmuyor.
            </div>
          )}
        </div>
      </div>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;
