import styles from '../Exams/Exams.module.css'
import { PanelList } from '../../sections/PanelList/PanelList'
export const Exams = () => {
  return (
    <div className={styles.exams}>
      <PanelList />
    </div>
  )
}
