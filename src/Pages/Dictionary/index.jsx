/* eslint-disable react/prop-types */
import styles from './style.module.css'
import Nav from '../../components/Nav'
import MilHeader from '../../components/MilHeader'
// import SAMPLE_LIST from '../../data/sampleDictionary.json'
import { Fragment, useCallback, useEffect, useState } from 'react'
import Loading from '../../media/loading.png'
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
      <a href={`/dictionary/detail?number=${props.index}&category=${props.category}&deso=${props.deso}&c=${props.c}&c1=${props.c1}`}>
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
  const tempList = []
  const [rememberList, setRList] = useState(tempList)
  const [fullList, setfullList] = useState(tempList)
  const [word, setWord] = useState('')
  const [totalCount, setTotalCount] = useState(null)

  const fullApi = useCallback(async () => {
    for (let i = 1; i <= 10; i++) {
      await fetch(`https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=${i}&perPage=2000&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D`, {
        method: 'GET'
      }).then(res => res.json())
        .then(data => {
          tempList.push(...data.data)
        })
    }
    setRList([...tempList])
    setfullList([...tempList])
  }, [])

  const changeWord = e => {
    setWord(e.target.value)

    const filteredList = rememberList.filter(data => data.표제어.includes(e.target.value))
    setfullList(filteredList)
  }

  const loadMorePage = useCallback((pageNum) => {
    fetch(`https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=${pageNum}&perPage=100&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D`, {
      method: 'GET'
    }).then(res => res.json())
      .then(data => {
        setList(list => {
          if (list.length && Math.floor(list.length / 100) === pageNum) return list
          return [...list, ...data.data]
        })
        setRList(list => {
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
    fullApi()
  }, [])
  return (
    <div>
        <MilHeader></MilHeader>
        <input className={styles.SearchBar} value={word} type='text' placeholder='단어 찾기' onChange={changeWord}></input>
        <ul className={styles.dictionary_list}>
            {word !== ''
              ? fullList?.map((item) => (
              <ListItem
                key={item.순번}
                index={item.순번}
                title={item.표제어}
                category={item.분류}
                deso={item.설명}
                c={item.출처}
                c1={item.출처1}
              />
              )) || <h1>로딩 중</h1>
              : list?.map((item) => (
              <ListItem
                key={item.순번}
                index={item.순번}
                title={item.표제어}
                category={item.분류}
                deso={item.설명}
                c={item.출처}
                c1={item.출처1}
              />
              )) || <img src={Loading} className={styles.loadingPage}></img>}
          {word === '' && list && list.length < totalCount && (
            <button className={styles.loadButton} onClick={() => {
              loadMorePage(list.length / 100 + 1)
              loadMorePage(list.length / 100 + 1)
            }}>추가 로드</button>
          ) }
        </ul>
        <Nav/>

    </div>

  )
}

export default Dictionary
