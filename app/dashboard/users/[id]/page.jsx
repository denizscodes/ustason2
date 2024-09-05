import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

import { updateUser } from "../../../lib/actions";
import { fetchUser } from "../../../lib/data";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={`${styles.infoContainer} hide-mobile`}>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            defaultValue={user.username}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            defaultValue={user.email}
          />
          <label>Password</label>
          <input name="password" />
          <label>Telefon 1</label>
          <input
            type="text"
            name="telbir"
            placeholder={user.telbir}
            defaultValue={user.telbir}
          />
          <label>Telefon 2</label>
          <input
            type="text"
            name="teliki"
            placeholder={user.teliki}
            defaultValue={user.teliki}
          />
          <label>Address</label>
          <textarea
            type="text"
            name="adres"
            placeholder={user.adres}
            defaultValue={user.adres}
          />
          <label>Pozisyon</label>
          <select name="pozisyon" id="pozisyon" defaultValue={user.pozisyon}>
            <option value="Atolye Çırak">Atolye Çırak</option>
            <option value="Atolye Ustası">Atolye Ustası</option>
            <option value="Harici Usta">Harici Usta</option>
            <option value="Malzeme Tedarik">Malzeme Tedarik</option>
            <option value="Operatör">Operatör</option>
            <option value="Patron">Patron</option>
            <option value="Teknisyen">Teknisyen</option>
            <option value="Teknisyen Yardımcısı">Teknisyen Yardımcısı</option>
          </select>
          <label>İl</label>
          <input
            type="text"
            name="il"
            placeholder={user.il}
            defaultValue={user.il}
          />
          <label>İlçe</label>
          <input
            type="text"
            name="ilce"
            placeholder={user.ilce}
            defaultValue={user.ilce}
          />
          <label>Admin mi?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            defaultValue={user.isAdmin ? "true" : "false"}
          >
            <option value={true}>Evet</option>
            <option value={false}>Hayır</option>
          </select>
          <label>Aktif mi?</label>
          <select
            name="isActive"
            id="isActive"
            defaultValue={user.isActive ? "true" : "false"}
          >
            <option value={true}>Evet</option>
            <option value={false}>Hayır</option>
          </select>
          <label>Kimlik NO</label>
          <input
            type="text"
            name="kimlikno"
            placeholder={user.kimlikno}
            defaultValue={user.kimlikno}
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
