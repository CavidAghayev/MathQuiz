import styles from '../Exams/Exams.module.css'
import { PanelList } from '../../sections/PanelList/PanelList'
import Input from '../../sections/Input/Input'
import { UserProfile } from '../../sections/UserProfile/UserProfile'
import { useState } from 'react'
export const Exams = () => {
   const [formData,setFormData] = useState({});
   console.log(formData)
  return (
    <div className={styles.exams}>
      <PanelList />
      <div className={styles["exams__user-profile"]}>
      <UserProfile />
      <div className={styles.research}>
        <div className={styles["inputs"]}>
        <form action="">
          <div className={styles["search"]}>
        <Input
        value={formData.search}
        onChange={(e)=>
          setFormData({...formData, search: e.target.value})
        }
        size={"md"}
        type="search"
        id="search"
        />
          </div>
          <div className={styles.selects}>
            
          </div>
        </form>
        </div>
      </div>

      </div>
    </div>
  )
}
