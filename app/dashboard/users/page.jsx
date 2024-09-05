import { fetchUsers } from "../../lib/data.js";
import Pagination from "../../ui/dashboard/pagination/pagination.jsx";
import Search from "../../ui/dashboard/search/search"; // Import the component, not the CSS module
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import { deleteUser } from "../../lib/actions";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  // Function to format date to Turkish
  const formatDateToTurkish = (date) => {
    return new Date(date).toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Ara" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Oluştur</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Personel</td>
            <td>Pozisyon</td>
            <td className="hide-mobile">Telefon</td>
            <td className="hide-mobile">Adres</td>
            <td className="hide-mobile">Oluşturulma</td>
            <td className="hide-mobile">Aktiflik</td>
            <td>Aksiyon</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link href={`/dashboard/users/${user.id}`}>
                  <div className={styles.user}>
                    {user.isAdmin ? "👑" : "🔨"} {user.username}
                  </div>
                </Link>
              </td>
              <td>{user.pozisyon}</td>
              <td className="hide-mobile">{user.telbir}</td>
              <td className="hide-mobile">{user.adres}</td>
              <td className="hide-mobile">
                {formatDateToTurkish(user.createdAt)}
              </td>
              <td className="hide-mobile">
                {user.isActive ? "Aktif" : "Aktif Değil"}
              </td>
              <td>
                <div className={styles.buttons}>
                  <form action={deleteUser} method="POST">
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Sil
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
