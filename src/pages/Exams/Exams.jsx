import styles from '../Exams/Exams.module.css'
import Input from '../../sections/Input/Input'
import { useState } from 'react'
import { Select } from '../../sections/Select/Select'
export const Exams = () => {
   const [formData,setFormData] = useState({});
  return (
    <div className={styles.exams}>
      <div className={styles.research}>
        <form action="" className={styles.form}>
          <div className={styles["search"]}>
        <Input
        value={formData.search}
        onChange={(e)=>
          setFormData({...formData, search: e.target.value})
        }
        size={"md"}
        type="search"
        id="search"
        placeholder={"Search"}
        />
          </div>
          <div className={styles.select}>
            <div className={styles.select__type}>
            <Select
            size={"sm"}
            >
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
              <option value="d">d</option>
            </Select>
            </div>
            <div className={styles.select__price}>
            <Select
            size={"sm"}
            >
              </Select>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}
