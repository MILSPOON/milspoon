/* eslint-disable react/prop-types */
import styles from './style.module.css'

// import SAMPLE_LIST from '../../data/sampleDictionary.json'
import { Fragment, useCallback, useEffect, useState } from 'react'

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
        <div className={styles.dictionary_content}>

        <ul className={styles.dictionary_categories}>
          {props.category.split('>').map((word, index) => (
            <Fragment key={props.category + '_' + index}>
              {index !== 0 && <span>{'>'}</span>}
            <span key={word + index} className={styles.dictionary_category}>
              {word}
            </span>
            </Fragment>
          ))}
        </ul>
      <p className={styles.dictionary_entry}>{props.title}</p>
        </div>
      </div>
      </a>
    </li>
  )
}

function Dictionary () {
  const [list, setList] = useState(null)

  const [totalCount, setTotalCount] = useState(null)

  const loadMorePage = useCallback((pageNum) => {
    fetch(`https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=${pageNum}&perPage=100&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D`, {
      method: 'GET'
    }).then(res => res.json())
      .then(data => {
        setList(list => {
          if (list.length && Math.floor(list.length / 100) === pageNum) return list
          return [...list, ...data.data]
        })
        setTotalCount(data.totalCount)
      })
  }, [])

  useEffect(() => {
    fetch('https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=1&perPage=100&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D', {
      method: 'GET'
    }).then(res => res.json())
      .then(data => {
        setList(data.data)
        setTotalCount(data.totalCount)
      })
  }, [])

  return (
    <div>
      <div className={styles.menubar}>
        <svg width="30" height="7" viewBox="0 0 30 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.7643 3.6789C27.0635 3.6789 27.2989 3.56881 27.4707 3.34862C27.648 3.12232 27.7367 2.81957 27.7367 2.44037C27.7367 2.06116 27.648 1.76147 27.4707 1.54128C27.2989 1.31498 27.0635 1.20184 26.7643 1.20184H25.2931V3.6789H26.7643ZM24.0298 0.00917469H26.8058C27.2325 0.00917469 27.612 0.11315 27.9445 0.321101C28.2769 0.522936 28.5346 0.810398 28.7174 1.18349C28.9058 1.55046 29 1.96942 29 2.44037C29 2.91131 28.9058 3.33333 28.7174 3.70642C28.5346 4.07339 28.2769 4.36086 27.9445 4.56881C27.612 4.77064 27.2325 4.87156 26.8058 4.87156H25.2931V6.9633H24.0298V0.00917469Z" fill="white"/>
          <path d="M1.26332 2.23853V6.9633H0V0.00917469H1.42955L3.52401 3.44037L5.61846 0.00917469H7.04801V6.9633H5.78469V2.23853L3.52401 5.69725L1.26332 2.23853Z" fill="white"/>
          <path d="M10.1706 0.00917469V6.9633H8.90728V0.00917469H10.1706Z" fill="white"/>
          <path d="M13.2496 5.77064H16.1669V6.9633H11.9863V0.00917469H13.2496V5.77064Z" fill="white"/>
          <path d="M18.4636 4.95413C18.6576 5.20489 18.882 5.41284 19.1368 5.57798C19.3973 5.737 19.6383 5.81651 19.8599 5.81651C20.1979 5.81651 20.4722 5.73089 20.6828 5.55963C20.8989 5.38838 21.0069 5.1682 21.0069 4.89908C21.0069 4.75229 20.9543 4.62997 20.849 4.53211C20.7492 4.42813 20.6218 4.34557 20.4667 4.2844C20.3171 4.22324 20.101 4.14679 19.8184 4.05505C19.3862 3.92049 19.0316 3.78593 18.7545 3.65138C18.483 3.51682 18.2475 3.31499 18.0481 3.04587C17.8486 2.77676 17.7489 2.42202 17.7489 1.98165C17.7489 1.59633 17.8403 1.25382 18.0231 0.954129C18.2115 0.654435 18.4719 0.422018 18.8044 0.256881C19.1369 0.0856269 19.5164 0 19.943 0C20.3198 0 20.7022 0.100918 21.09 0.302753C21.4834 0.504588 21.7992 0.767584 22.0375 1.09174L21.1149 1.89908C20.9598 1.69113 20.7742 1.51988 20.5581 1.38532C20.342 1.25076 20.1453 1.18349 19.968 1.18349C19.6854 1.18349 19.4555 1.25688 19.2781 1.40367C19.1008 1.55046 19.0122 1.74006 19.0122 1.97248C19.0122 2.18654 19.1119 2.35474 19.3114 2.47706C19.5109 2.59939 19.8211 2.73395 20.2423 2.88073C20.6634 3.02752 21.0097 3.17125 21.2812 3.31193C21.5527 3.44648 21.7854 3.64526 21.9793 3.90826C22.1733 4.16514 22.2702 4.49541 22.2702 4.89908C22.2702 5.30887 22.1677 5.67278 21.9627 5.99083C21.7632 6.30887 21.4806 6.55657 21.1149 6.73394C20.7548 6.91131 20.3448 7 19.8849 7C19.4693 7 19.0399 6.88685 18.5966 6.66055C18.1533 6.42813 17.7932 6.1315 17.5161 5.77064L18.4636 4.95413Z" fill="white"/>
          <path d="M30 6C30 6.55228 29.5523 7 29 7C28.4477 7 28 6.55228 28 6C28 5.44772 28.4477 5 29 5C29.5523 5 30 5.44772 30 6Z" fill="#D0FF00"/>
        </svg>
        <div className={styles.circle}></div>
      </div>
        <ul className={styles.dictionary_list}>
          {list?.map((item) => (
            <ListItem
              key={item.순번}
              index={item.순번}
              title={item.표제어}
              category={item.분류}
            />
          )) || <h1>로딩 중</h1>}
          {list && list.length < totalCount && (
            <button className={styles.loadButton} onClick={() => {
              loadMorePage(list.length / 100 + 1)
              loadMorePage(list.length / 100 + 1)
            }}>추가 로드</button>
          ) }
        </ul>
    </div>
  )
}

export default Dictionary
