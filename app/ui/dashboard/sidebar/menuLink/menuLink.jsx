"use client"

import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'

const MenuLink = ({item}) => {

  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
     <div className="mini"> {item.icon}
      <div className="listtext" >{item.title}</div></div>
    </Link>
  )
}

export default MenuLink