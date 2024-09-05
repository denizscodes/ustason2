import Link from "next/link";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import { fetchProducts } from "../../lib/data";
import { deleteProduct } from "../../lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const { count, products } = await fetchProducts(q);

  // Filter products by customer name only and exclude those without a customer name
  const filteredProducts = products.filter(
    (product) =>
      product.bakimdurum && // Ensure the product has a customer name
      product.bakimdurum.toLowerCase().includes(q.toLowerCase()) // Filter by customer name
  );

  // Calculate the warranty status and remaining days based on "created at" date
  const calculateWarrantyStatus = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const diffInDays = Math.floor(
      (currentDate - createdDate) / (1000 * 60 * 60 * 24)
    );
    const remainingDays = 365 - diffInDays;
    if (remainingDays > 0) {
      return `Garantili (${remainingDays} gün kaldı)`;
    } else {
      return "Garantisiz";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Ara" />
        <Link href="/dashboard/bakim/add">
          <button className={styles.addButton}>Oluştur</button>
        </Link>
      </div>
      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>MÜŞTERİ ADI</div>
          <div className={`${styles.tableHeaderCell} hide-mobile`}>ADRES</div>
          <div className={`${styles.tableHeaderCell} hide-mobile`}>BAKIM DURUMU</div>
          <div className={styles.tableHeaderCell}>GARANTİ SÜRESİ</div>
          <div className={styles.tableHeaderCell}>İŞLEMLER</div>
        </div>
        <div className={styles.tableBody}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className={styles.tableRow}>
                <div className={styles.tableCell}>
                <Link href={`/dashboard/bakim/${product.id}`}>
                  <strong>{product.musteriisim}</strong>
                  <p>{product.phone}</p>
                  <p>{product.phonetwo}</p>
                  </Link>
                </div>
                
                <div className={`${styles.tableCell} hide-mobile`}>
                  <p>{product.address}</p>
                </div>
                <div className={`${styles.tableCell} hide-mobile`}>
                  <Link href={`/dashboard/bakim/${product.id}`}>
                    <p>{product.bakimdurum}</p>
                  </Link>
                </div>
                <div className={styles.tableCell}>
                  <p>{calculateWarrantyStatus(product.createdAt)}</p>
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
    </div>
  );
};

export default ProductsPage;



