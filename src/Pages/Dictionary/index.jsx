/* eslint-disable react/prop-types */
import styles from './style.module.css'

import SAMPLE_LIST from '../../data/sampleDictionary.json'

// const obj = {

// }
// undefined

// obj.a()
// obj?.a()

// obj.a()

// obj ? obj.a?.() || 함수 없음 : 객체 없음

const ListItem = (props) => {
  return (
    <li className={styles.dictionary_list_item}>
      <a href={`/dictionary/detail?number=${props.index}`}>
      <div className={styles.dictionary_info}>
        <span className={styles.number}>{props.index}</span>
        <ul className={styles.dictionary_categories}>
          {props.category.split('>').map((word, index) => (
            <>
              {index !== 0 && <span>{'>'}</span>}
            <span key={word + index} className={styles.dictionary_category}>
              {word}
            </span>
            </>
          ))}
        </ul>
      </div>
      <p>{props.title}</p>
      </a>
    </li>
  )
}

function Dictionary () {
  return (
    <div>
      <div className={styles.menubar}>
        <p>용어 사전</p>
      </div>
        <ul className={styles.dictionary_list}>
          {SAMPLE_LIST.map((item) => (
            <ListItem
              key={item.순번}
              index={item.순번}
              title={item.표제어}
              category={item.분류}
            />
          ))}
        </ul>
    </div>
  )
}

export default Dictionary
