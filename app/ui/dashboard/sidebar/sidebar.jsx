import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { auth, signOut } from "../../../auth";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const Sidebar = async () => {
  const { user } = await auth();
  const username = user.username;
  const userPosition = user.pozisyon; // Fetch the user's position

  // Define menu items
  const menuItems = [
    {
      
      list: [
        {
          title: "Adminx",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Servisler",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        ...(userPosition === "Patron"
          ? [
              {
                title: "Periyodik Bakım",
                path: "/dashboard/bakim",
                icon: <MdOutlineSettings />,
              },
              {
                title: "Personeller",
                path: "/dashboard/users",
                icon: <MdPeople />,
              },
              {
                title: "Müşteriler",
                path: "/dashboard/musteri",
                icon: <MdSupervisedUserCircle />,
              },
              {
                title: "Kasa",
                path: "/dashboard/kasa",
                icon: <MdAttachMoney />,
              },
            ]
          : []),
        {
          title: "Destek",
          path: "/dashboard/destek",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || "/usta.webp"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{username}</span>
          <span className={styles.userTitle}>{user.pozisyon}</span>
        </div>
        <button className={`${styles.logoutmobile} `}>
          <MdLogout />
          Çıkış Yap
        </button>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={`${styles.logout} `}>
          <MdLogout />
          Çıkış Yap
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
