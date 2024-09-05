import Link from "next/link";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import { fetchProducts } from "../../lib/data";
import { deleteProduct } from "../../lib/actions";
import { auth } from "../../auth.js"; // Import auth to get user details

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { user } = await auth(); // Fetch user details
  const username = user.username;
  const userPosition = user.pozisyon;

  const { count, products } = await fetchProducts(q, page);

  // Function to determine the last non-empty service
  const getLastService = (product) => {
    if (product.islemdurumUc) {
      return {
        durum: product.islemdurumUc,
        aciklama: product.islemaciklamaUc,
        tarih: product.islemgunUc,
        saat: product.islemsaatUc,
        teknisyen: product.teknisyenUc,
      };
    } else if (product.islemdurumIki) {
      return {
        durum: product.islemdurumIki,
        aciklama: product.islemaciklamaIki,
        tarih: product.islemgunIki,
        saat: product.islemsaatIki,
        teknisyen: product.teknisyenIki,
      };
    } else if (product.islemdurumBir) {
      return {
        durum: product.islemdurumBir,
        aciklama: product.islemaciklamaBir,
        tarih: product.islemgunBir,
        saat: product.islemsaatBir,
        teknisyen: product.teknisyenBir,
      };
    }
    return null;
  };

  // Filter products by customer name and service description
  let filteredProducts = products.filter(
    (product) =>
      product.musteriisim.toLowerCase().includes(q.toLowerCase()) &&
      (product.islemdurumBir || product.islemdurumIki || product.islemdurumUc)
  );

  // If the user is not a Patron, only show products related to the current user
  if (userPosition !== "Patron") {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.islempersonelBir === username ||
        product.islempersonelIki === username ||
        product.islempersonelUc === username
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Ara" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Oluştur</button>
        </Link>
      </div>
      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>MÜŞTERİ ADI</div>
          <div className={styles.tableHeaderCell}>CIHAZ</div>
          <div className={styles.tableHeaderCell}>SERVIS DURUMU</div>
          <div className={styles.tableHeaderCell}>İŞLEMLER</div>
        </div>
        <div className={styles.tableBody}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => {
              const lastService = getLastService(product);

              return (
                <div key={product.id}>
                  <div className={styles.tableRow}>
                    <div className={styles.tableCell}>
                      <Link
                        href={`/dashboard/products/${product.id}`}
                        className={styles.tableRowLink} // Add a class for styling if needed
                      >
                        <strong>{product.musteriisim}</strong>
                        <p>{product.phone}</p>
                        <p>{product.phonetwo}</p>
                        <p>{product.address}</p>
                      </Link>
                    </div>
                    <div className={styles.tableCell}>
                      <p>
                        {product.cihaztur}, {product.cihazmodel}
                      </p>
                      <p>{product.cihazmarka}</p>
                      <p>{product.cihazariza}</p>
                    </div>
                    <div className={styles.tableCell}>
                      {lastService ? (
                        <>
                          <p>{lastService.durum}</p>
                          <p>Açıklama: {lastService.aciklama}</p>
                          <p>
                            {lastService.tarih?.toString().slice(4, 16)}{" "}
                            {lastService.saat}
                          </p>
                          <p>Teknisyen: {lastService.teknisyen}</p>
                        </>
                      ) : (
                        <p>Servis bilgisi bulunmuyor</p>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      {userPosition === "Patron" && (
                        <div className={styles.buttons}>
                          <form action={deleteProduct} method="POST">
                            <input
                              type="hidden"
                              name="id"
                              value={product.id}
                            />
                            <button
                              type="submit"
                              className={`${styles.button} ${styles.delete}`}
                            >
                              Sil
                            </button>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>

                  {index < filteredProducts.length - 1 && (
                    <hr className={styles.separator} />
                  )}
                </div>
              );
            })
          ) : (
            <div className={styles.noData}>
              Arama kriterlerine uygun ürün bulunmuyor.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
