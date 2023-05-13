import { PanelList } from '../../sections/PanelList/PanelList'
import { UserProfile } from '../../sections/UserProfile/UserProfile'
import { Exams } from '../../sections/Exams/Exams'
import styles from '../Dashboard/Dashboard.module.css'
export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
        <PanelList/>
        <div className={styles["user-profile"]}>
            <UserProfile/>
            <Exams/>
        </div>
    </div>
  )
}
