import DownloadButton from "../../../ui/dashboard/PrintButton/PrintButton.jsx";

import { fetchProduct } from "../../../lib/data";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import { updateProduct } from "../../../lib/actions";
import SMSButton from "../../../ui/dashboard/sms/sms.jsx";
import SMSButtonTwo from "../../../ui/dashboard/sms/smstwo.jsx";

import SMSButtonThree from "../../../ui/dashboard/sms/smsthree.jsx";


const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  const hasService = (service) => service && service.trim() !== "";

  const showService = {
    1: true,
    2: hasService(product.islemdurumBir),
    3: hasService(product.islemdurumBir) && hasService(product.islemdurumIki),
  };

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
          </div>
          {/* Ürün Bilgileri */}
          <div>
            <h3>Servis</h3>
            <div className={styles.formGroup}>
              <label htmlFor="title">Başlık</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={product.title}
                className={styles.inputField}
              />
              <label htmlFor="musaitzaman">Müsait Zaman</label>
              <input
                type="text"
                id="musaitzaman"
                name="musaitzaman"
                defaultValue={product.musaitzaman}
                className={styles.inputField}
              />
              <label htmlFor="operatornot">Operator Not</label>
              <input
                type="text"
                id="operatornot"
                name="operatornot"
                defaultValue={product.operatornot}
                className={styles.inputField}
              />
            </div>
          </div>

          <div>
            <h3>Cihaz Bilgisi</h3>
            <div className={styles.formGroup}>
              <label htmlFor="cihazmarka">Marka</label>
              <input
                type="text"
                id="cihazmarka"
                name="cihazmarka"
                defaultValue={product.cihazmarka}
                className={styles.inputField}
              />
              <label htmlFor="cihaztur">Tür</label>
              <input
                type="text"
                id="cihaztur"
                name="cihaztur"
                defaultValue={product.cihaztur}
                className={styles.inputField}
              />
              <label htmlFor="cihazmodel">Model</label>
              <input
                type="text"
                id="cihazmodel"
                name="cihazmodel"
                defaultValue={product.cihazmodel}
                className={styles.inputField}
              />
              <label htmlFor="cihazariza">Arıza</label>
              <input
                type="text"
                id="cihazariza"
                name="cihazariza"
                defaultValue={product.cihazariza}
                className={styles.inputField}
              />
            </div>
          </div>

          {/* Kasa Bilgileri */}
          <div>
            <h3>Kasa Bilgileri</h3>
            <div className={styles.formGroup}>
              <label htmlFor="kasaisim">Kasa İsim</label>
              <input
                type="text"
                id="kasaisim"
                name="kasaisim"
                defaultValue={product.kasaisim}
                className={styles.inputField}
              />
              <label htmlFor="odemesekli">Ödeme Şekli</label>
              <input
                type="text"
                id="odemesekli"
                name="odemesekli"
                defaultValue={product.odemesekli}
                className={styles.inputField}
              />
              <label htmlFor="personel">Personel</label>
              <input
                type="text"
                id="personel"
                name="personel"
                defaultValue={product.personel}
                className={styles.inputField}
              />
              <label htmlFor="aciklama">Açıklama</label>
              <input
                type="text"
                id="aciklama"
                name="aciklama"
                defaultValue={product.aciklama}
                className={styles.inputField}
              />
              <label htmlFor="durum">Durum</label>
              <input
                type="text"
                id="durum"
                name="durum"
                defaultValue={product.durum}
                className={styles.inputField}
              />
              <label htmlFor="tutar">Tutar</label>
              <input
                type="number"
                id="tutar"
                name="tutar"
                defaultValue={product.tutar}
                className={styles.inputField}
              />
            </div>
          </div>

          {/* Servis Bilgileri */}
          {showService[1] && (
            <div>
                    <SMSButton  phone={product.phone} islemdurumBir={product.islemdurumBir}/>

              <h3>Servis 1</h3>
              <div className={styles.formGroup}>
                <label htmlFor="islempersonelBir">Personel 1</label>
                <select
                  name="islempersonelBir"
                  id="islempersonelBir"
                  defaultValue={product.islempersonelBir}
                  className={styles.inputField}
                >
                  <option value="">Personel Seç</option>
                  <option value="Yusuf">Yusuf</option>
                  <option value="Anıl">Anıl</option>
                  <option value="Cavit Teknisyen">Cavit Teknisyen</option>
                  <option value="Yunus">Yunus</option>
                  <option value="Hakan">Hakan</option>
                  <option value="Cansel">Cansel</option>
                  <option value="Rabia">Rabia</option>
                  <option value="Cavit Patron">Cavit Patron</option>
                </select>
                <label htmlFor="islemdurumBir">Durum 1</label>
                <select
                  name="islemdurumBir"
                  id="islemdurumBir"
                  defaultValue={product.islemdurumBir}
                  className={styles.inputField}
                >
                  {" "}
                  <option value="">{product.islemdurumBir}</option>
                  <option value="Teknisyen Yönlendir">
                    Teknisyen Yönlendir
                  </option>
                  <option value="Yerinde Bakım Yapıldı">
                    Yerinde Bakım Yapıldı
                  </option>
                  <option value="Parça Sipariş Verildi">
                    Parça Sipariş Verildi
                  </option>
                  <option value="Tekrar Bakım Gidilecek">
                    Tekrar Bakım Gidilecek
                  </option>
                  <option value="Teslim Edildi">Teslim Edildi</option>
                  <option value="İade">İade</option>
                </select>
                <label htmlFor="islemaciklamaBir">Açıklama</label>
                <input
                  type="islemaciklamaBir"
                  id="islemaciklamaBir"
                  name="islemaciklamaBir"
                  defaultValue={product.islemaciklamaBir}
                  className={styles.inputField}
                />

                <label htmlFor="teknisyenBir">Teknisyen</label>
                <select
                  name="teknisyenBir"
                  id="teknisyenBir"
                  defaultValue={product.teknisyenBir}
                  className={styles.inputField}
                >
                  <option value="">Teknisyen Seç</option>
                  <option value="Yusuf">Yusuf</option>
                  <option value="Anıl">Anıl</option>
                  <option value="Cavit Teknisyen">Cavit Teknisyen</option>
                  <option value="Yunus">Yunus</option>
                  <option value="Hakan">Hakan</option>
                  <option value="Cansel">Cansel</option>
                  <option value="Rabia">Rabia</option>
                  <option value="Cavit Patron">Cavit Patron</option>
                </select>
                <label htmlFor="yardimciteknisyenBir">Yardımcı Teknsiyen</label>
                <select
                  name="yardimciteknisyenBir"
                  id="yardimciteknisyenBir"
                  defaultValue={product.yardimciteknisyenBir}
                  className={styles.inputField}
                >
                  <option value="">Teknisyen Seç</option>
                  <option value="Yusuf">Yusuf</option>
                  <option value="Anıl">Anıl</option>
                  <option value="Cavit Teknisyen">Cavit Teknisyen</option>
                  <option value="Yunus">Yunus</option>
                  <option value="Hakan">Hakan</option>
                  <option value="Cansel">Cansel</option>
                  <option value="Rabia">Rabia</option>
                  <option value="Cavit Patron">Cavit Patron</option>
                </select>
                <label htmlFor="islemgunBir">Tarih 1</label>
                <input
                  type="date"
                  id="islemgunBir"
                  name="islemgunBir"
                  placeholder={product.islemgunBir}
                  defaultValue={product.islemgunBir}
                  className={styles.inputField}
                />
                <label htmlFor="islemgunBir">Saat 1</label>
                <input
                  type="date"
                  id="islemsaatBir"
                  name="islemsaatBir"
                  placeholder={product.islemsaatBir}
                  defaultValue={product.islemsaatBir}
                  className={styles.inputField}
                />
                <label htmlFor="islemtutarBir">Tutar 1</label>
                <input
                  type="number"
                  id="islemtutarBir"
                  name="islemtutarBir"
                  defaultValue={product.islemtutarBir}
                  className={styles.inputField}
                />
              </div>
            </div>
          )}
          {showService[2] && (
            <div>
                                  <SMSButtonTwo  phone={product.phone} islemdurumIki={product.islemdurumIki}/>

              <h3>Servis 2</h3>
              <div className={styles.formGroup}>
                <label htmlFor="islempersonelIki">Personel 2</label>
                <select
                  name="islempersonelIki"
                  id="islempersonelIki"
                  defaultValue={product.islempersonelIki}
                  className={styles.inputField}
                >
                  <option value="">Personel Seç</option>
                  <option value="Yusuf">Yusuf</option>
                  <option value="Anıl">Anıl</option>
                  <option value="Cavit Teknisyen">Cavit Teknisyen</option>
                  <option value="Yunus">Yunus</option>
                  <option value="Hakan">Hakan</option>
                  <option value="Cansel">Cansel</option>
                  <option value="Rabia">Rabia</option>
                  <option value="Cavit Patron">Cavit Patron</option>
                </select>
                <label htmlFor="islemdurumIki">Durum 2</label>
                <select
                  name="islemdurumIki"
                  id="islemdurumIki"
                  defaultValue={product.islemdurumIki}
                  className={styles.inputField}
                >
                  <option value="">Servis Durum</option>
                  <option value="Teknisyen Yönlendir">
                    Teknisyen Yönlendir
                  </option>
                  <option value="Yerinde Bakım Yapıldı">
                    Yerinde Bakım Yapıldı
                  </option>
                  <option value="Parça Sipariş Verildi">
                    Parça Sipariş Verildi
                  </option>
                  <option value="Tekrar Bakım Gidilecek">
                    Tekrar Bakım Gidilecek
                  </option>
                  <option value="Teslim Edildi">Teslim Edildi</option>
                  <option value="İade">İade</option>
                </select>
                <label htmlFor="islemaciklamaIki">Açıklama</label>
                <input
                  type="islemaciklamaIki"
                  id="islemaciklamaIki"
                  name="islemaciklamaIki"
                  defaultValue={product.islemaciklamaIki}
                  className={styles.inputField}
                />
                <label htmlFor="teknisyenBir">Teknisyen</label>
                <select
                  name="teknisyenBir"
                  id="teknisyenBir"
                  defaultValue={product.teknisyenIki}
                  className={styles.inputField}
                >
                  <option value="">Teknisyen Seç</option>
                  <option value="Yusuf">Yusuf</option>
                  <option value="Anıl">Anıl</option>
                  <option value="Cavit Teknisyen">Cavit Teknisyen</option>
                  <option value="Yunus">Yunus</option>
                  <option value="Hakan">Hakan</option>
                  <option value="Cansel">Cansel</option>
                  <option value="Rabia">Rabia</option>
                  <option value="Cavit Patron">Cavit Patron</option>
                </select>
                <select
                  name="yardimciteknisyenIki"
                  id="yardimciteknisyenIki"
                  defaultValue={product.yardimciteknisyenIki}
                  className={styles.inputField}
                >
                  <option value=""> Yardımcı Teknisyen Seç</option>
                  <option value="Yusuf">Yusuf</option>
                  <option value="Anıl">Anıl</option>
                  <option value="Cavit Teknisyen">Cavit Teknisyen</option>
                  <option value="Yunus">Yunus</option>
                  <option value="Hakan">Hakan</option>
                  <option value="Cansel">Cansel</option>
                  <option value="Rabia">Rabia</option>
                  <option value="Cavit Patron">Cavit Patron</option>
                </select>
                <label htmlFor="islemtarihIki">Tarih 2</label>
                <input
                  type="date"
                  id="islemtarihIki"
                  name="islemtarihIki"
                  defaultValue={product.islemtarihIki}
                  className={styles.inputField}
                />{" "}
                <label htmlFor="islemgunBir">Saat 2</label>
                <input
                  type="date"
                  id="islemsaatIki"
                  name="islemsaatIki"
                  placeholder={product.islemsaatIki}
                  defaultValue={product.islemsaatIki}
                  className={styles.inputField}
                />
                <label htmlFor="islemtutarIki">Tutar 2</label>
                <input
                  type="number"
                  id="islemtutarIki"
                  name="islemtutarIki"
                  defaultValue={product.islemtutarIki}
                  className={styles.inputField}
                />
              </div>
            </div>
          )}
          {showService[3] && (
            <div>
                                                <SMSButtonThree  phone={product.phone} islemdurumThree={product.islemdurumThree}/>

              <h3>Servis 3</h3>
              <div className={styles.formGroup}>
                <label htmlFor="islempersonelUc">Personel 3</label>
                <select
                  name="islempersonelUc"
                  id="islempersonelUc"
                  defaultValue={product.islempersonelUc}
                  className={styles.inputField}
                >
                  <option value="">Personel Seç</option>
                  <option value="Yusuf">Yusuf</option>
                  <option value="Anıl">Anıl</option>
                  <option value="Cavit Teknisyen">Cavit Teknisyen</option>
                  <option value="Yunus">Yunus</option>
                  <option value="Hakan">Hakan</option>
                  <option value="Cansel">Cansel</option>
                  <option value="Rabia">Rabia</option>
                  <option value="Cavit Patron">Cavit Patron</option>
                </select>
                <label htmlFor="islemdurumUc">Durum 3</label>
                <select
                  name="islemdurumUc"
                  id="islemdurumUc"
                  defaultValue={product.islemdurumUc}
                  className={styles.inputField}
                >
                  <option value="">Servis Durum</option>
                  <option value="Teknisyen Yönlendir">
                    Teknisyen Yönlendir
                  </option>
                  <option value="Yerinde Bakım Yapıldı">
                    Yerinde Bakım Yapıldı
                  </option>
                  <option value="Parça Sipariş Verildi">
                    Parça Sipariş Verildi
                  </option>
                  <option value="Tekrar Bakım Gidilecek">
                    Tekrar Bakım Gidilecek
                  </option>
                  <option value="Teslim Edildi">Teslim Edildi</option>
                  <option value="İade">İade</option>
                </select>
                <label htmlFor="islemaciklamaUc">Açıklama</label>
                <input
                  type="islemaciklamaUc"
                  id="islemaciklamaUc"
                  name="islemaciklamaUc"
                  defaultValue={product.islemaciklamaUc}
                  className={styles.inputField}
                />
                <label htmlFor="teknisyenUc">Teknisyen</label>
                <select
                  name="teknisyenUc"
                  id="teknisyenUc"
                  defaultValue={product.teknisyenUc}
                  className={styles.inputField}
                >
                  <option value="">Teknisyen Seç</option>
                  <option value="Yusuf">Yusuf</option>
                  <option value="Anıl">Anıl</option>
                  <option value="Cavit Teknisyen">Cavit Teknisyen</option>
                  <option value="Yunus">Yunus</option>
                  <option value="Hakan">Hakan</option>
                  <option value="Cansel">Cansel</option>
                  <option value="Rabia">Rabia</option>
                  <option value="Cavit Patron">Cavit Patron</option>
                </select>
                <select
                  name="yardimciteknisyenUc"
                  id="yardimciteknisyenUc"
                  defaultValue={product.yardimciteknisyenUc}
                  className={styles.inputField}
                >
                  <option value=""> Yardımcı Teknisyen Seç</option>
                  <option value="Yusuf">Yusuf</option>
                  <option value="Anıl">Anıl</option>
                  <option value="Cavit Teknisyen">Cavit Teknisyen</option>
                  <option value="Yunus">Yunus</option>
                  <option value="Hakan">Hakan</option>
                  <option value="Cansel">Cansel</option>
                  <option value="Rabia">Rabia</option>
                  <option value="Cavit Patron">Cavit Patron</option>
                </select>
                <label htmlFor="islemtarihUc">Tarih 3</label>
                <input
                  type="date"
                  id="islemtarihUc"
                  name="islemtarihUc"
                  defaultValue={product.islemtarihUc}
                  className={styles.inputField}
                />{" "}
                <label htmlFor="islemtutarUc">Tutar 3</label>
                <input
                  type="number"
                  id="islemtutarUc"
                  name="islemtutarUc"
                  defaultValue={product.islemtutarUc}
                  className={styles.inputField}
                />
              </div>
            </div>
          )}

          <div className={styles.formGroup}>
            <button type="submit" className={styles.button}>
              Güncelle
            </button>
          </div>
        </form>
      </div>
      <DownloadButton product={product} />
    </div>
  );
};

export default SingleProductPage;
