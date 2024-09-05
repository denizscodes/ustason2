import { User, Product } from "../../lib/models";
import { auth } from "../../auth.js";
import styles from "../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faUsers,
  faUserTie,
  faCashRegister,
  faCalendarDay,
  faCalendarWeek,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const Mains = async ({ searchParams }) => {
  const { user } = await auth();
  const userPosition = user.pozisyon;
  const username = user.username;

  // Helper function to count documents with specific conditions
  const countDocuments = async (conditions) => {
    return await Product.countDocuments(conditions);
  };

  // Conditions based on user role
  const conditions = userPosition === "Patron" ? {} : {
    $or: [
      { islempersonelBir: username },
      { islempersonelIki: username },
      { islempersonelUc: username }
    ]
  };

  // Fetching summary statistics
  const serviceCount = await countDocuments({
    ...conditions,
    islemdurumBir: { $exists: true, $ne: "" }
  });

  const periodicMaintenanceCount = userPosition === "Patron" ? await countDocuments({
    ...conditions,
    bakimdurum: { $exists: true, $ne: "" }
  }) : null;

  const customerCount = userPosition === "Patron" ? await countDocuments({
    musteriisim: { $exists: true, $ne: ""}
  }) : null;

  const personnelCount = userPosition === "Patron" ? await User.countDocuments() : null;

  // Aggregating kasa durum (cash status)
  let kasaDurum = [];
  if (userPosition === "Patron") {
    try {
      kasaDurum = await Product.aggregate([
        { $match: conditions },
        { $group: { _id: null, total: { $sum: "$tutar" } } }
      ]);
    } catch (error) {
      console.error('Kasa Durumu Hesaplanırken Bir Hata Oluştu:', error);
    }
  }

  // Date calculations
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const endOfDay = new Date(today);
  endOfDay.setDate(today.getDate() + 1);

  // Calculate the start and end of the current week
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay()); // Sets to the start of the current week (Sunday)
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7); // Sets to the end of the current week (Saturday)

  // Calculate the start and end of the current month
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // First day of the month
  startOfMonth.setHours(0, 0, 0, 0);

  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1); // First day of the next month

  // Fetching daily, weekly, and monthly service counts
  const todayServiceCount = await countDocuments({
    ...conditions,
    createdAt: { $gte: today, $lt: endOfDay },
    islemdurumBir: { $exists: true, $ne: "" }
  });

  const weeklyServiceCount = await countDocuments({
    ...conditions,
    createdAt: { $gte: startOfWeek, $lt: endOfWeek },
    islemdurumBir: { $exists: true, $ne: "" }
  });

  const monthlyServiceCount = await countDocuments({
    ...conditions,
    createdAt: { $gte: startOfMonth, $lt: endOfMonth },
    islemdurumBir: { $exists: true, $ne: "" }
  });

  return (
    <div className={styles.container}>
      <div className={styles.header} style={{marginBottom:"10px"}}>
        <h1> Hoşgeldin {user.username}</h1>
       
      </div>
      <div className={styles.summary}>
        {/* Always visible */}
        <div className={styles.litcontainer} >
          <FontAwesomeIcon icon={faWrench} className={styles.icon} />
          <div>Servis Sayısı: {serviceCount}</div>
        </div>

        {/* Conditional rendering based on user role */}
        {userPosition === "Patron" && (
          <>
            <div className={styles.litcontainer}>
              <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
              <div>Periyodik Bakım Sayısı: {periodicMaintenanceCount}</div>
            </div>
            <div className={styles.litcontainer}>
              <FontAwesomeIcon icon={faUsers} className={styles.icon} />
              <div>Müşteri Sayısı: {customerCount}</div>
            </div>
            <div className={styles.litcontainer}>
              <FontAwesomeIcon icon={faUserTie} className={styles.icon} />
              <div>Personel Sayısı: {personnelCount}</div>
            </div>
            <div className={styles.litcontainer}>
              <FontAwesomeIcon icon={faCashRegister} className={styles.icon} />
              <div>Kasa Durumu: {kasaDurum[0]?.total || 0} TL</div>
            </div>
          </>
        )}
      </div>
      <div className={styles.statistics}>
        <div className={styles.litcontainer}>
          <FontAwesomeIcon icon={faCalendarDay} className={styles.icon} />
          <div>Bugün alınan yeni servis sayısı: {todayServiceCount}</div>
        </div>
        <div className={styles.litcontainer}>
          <FontAwesomeIcon icon={faCalendarWeek} className={styles.icon} />
          <div>Haftalık alınan yeni servis sayısı: {weeklyServiceCount}</div>
        </div>
        <div className={styles.litcontainer}>
          <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
          <div>Aylık alınan yeni servis sayısı: {monthlyServiceCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Mains;
