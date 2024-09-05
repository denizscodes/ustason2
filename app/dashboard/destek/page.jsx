import Pagination from "../../ui/dashboard/pagination/pagination.jsx";
import Link from "next/link";
import styles from "../../ui/dashboard/users/users.module.css";
import Filter from "../../ui/dashboard/filter/filter.jsx";
import { deleteUser } from "../../lib/actions";
import { fetchDesteks } from "../../lib/data.js";
import { auth } from "../../auth.js"; // Import auth to get user details

const DestekPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = parseInt(searchParams?.page) || 1;
  const kategori = searchParams?.kategori || "";
  const marka = searchParams?.marka || "";
  const model = searchParams?.model || "";

  const { user } = await auth(); // Fetch user details
  const userPosition = user.pozisyon; // Get user position

  const { products, count, kategoriler, markalar, modeller } = await fetchDesteks(q, page, kategori, marka, model);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Filter
          kategoriler={kategoriler}
          markalar={markalar}
          modeller={modeller}
          initialKategori={kategori}
          initialMarka={marka}
          initialModel={model}
        />
        <Link href="/dashboard/destek/add">
          <button className={styles.addButton}>Oluştur</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Model</td>
            <td>Arıza Kodu</td>
            <td className="hide-mobile">Kategori</td>
            <td className="hide-mobile">Marka</td>
            <td>Aksiyon</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>
                <Link href={`/dashboard/destek/${item._id}`}>{item.destekmodel}</Link>
              </td>
              <td>
                <Link href={`/dashboard/destek/${item._id}`}>{item.destekarizakodu}</Link>
              </td>
              <td className="hide-mobile">{item.destekkategori}</td>
              <td className="hide-mobile">{item.destekmarka}</td>
              <td>
                <div className={styles.buttons}>
                  {userPosition === "Patron" && (
                    <form action={deleteUser} method="POST">
                      <input type="hidden" name="id" value={item._id} />
                      <button type="submit" className={`${styles.button} ${styles.delete}`}>
                        Sil
                      </button>
                    </form>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination count={count} currentPage={page} />
    </div>
  );
};

export default DestekPage;
