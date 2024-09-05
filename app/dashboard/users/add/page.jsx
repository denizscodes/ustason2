import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";

import { addUser } from "../../../lib/actions";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />

        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <select name="pozisyon" id="pozisyon">
          <option value="pozisyon giriniz">Pozisyon</option>
          <option value="Atolye Çırak">Atolye Çırak</option>
          <option value="Atolye Ustası">Atolye Ustası</option>
          <option value="Harici Usta">Harici Usta</option>
          <option value="Malzeme Tedarik">Malzeme Tedarik</option>
          <option value="Operatör">Operatör</option>
          <option value="Patron">Patron</option>
          <option value="Teknisyen">Teknisyen</option>
          <option value="Teknisyen Yardımcısı">Teknisyen Yardımcısı</option>
        </select>
        <input type="text" placeholder="Telefon 1" name="telbir" />
        <input type="text" placeholder="Telefon 2" name="teliki" />
        <input type="text" placeholder="İl" name="il" />
        <input type="text" placeholder="İlçe" name="ilce" />
        <input type="text" placeholder="Adres" name="adres" />
        <input type="email" placeholder="email" name="email" required />
        <input type="text" placeholder="Kimlik No" name="kimlikno" />

        <select name="isAdmin" id="isAdmin">
          <option value={false}>Admin</option>
          <option value={true}>Evet</option>
          <option value={false}>Hayır</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Aktiflik</option>
          <option value={true}>Aktif</option>
          <option value={false}>Aktif Değil</option>
        </select>

        <button type="submit">Oluştur</button>
      </form>
    </div>
  );
};

export default AddUserPage;
