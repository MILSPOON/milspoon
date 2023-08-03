/* eslint-disable react/prop-types */
import './style.css'

import { useSearchParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import Nav from '../../components/Nav'
import MilHeader from '../../components/MilHeader'

function Dictionary () {
  const [searchParams] = useSearchParams()

  const number = useMemo(() => searchParams.get('number'), [])

  const [detailData, setDetailData] = useState(null)

  useEffect(() => {
    if (!number) return
    fetch('https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=1&perPage=2000&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D', {
      method: 'GET'
    }).then(res => res.json())
      .then(data => setDetailData(data.data[number - 1]))
  }, [number])

  if (number) {
    return (
    <div>
      <MilHeader></MilHeader>
      <div className='dictionary_word'>
        <div className='word_classification'>
          <h3 className='subheading'>분류</h3>
          {detailData?.분류}</div>
        <hr />
        <div className='word_explane'>
          <h3 className='subheading'>설명</h3>
          {detailData?.설명}
          </div>
        <hr />
        <div className='word_whence'>
          <h3 className='subheading'>출처</h3>
          {detailData?.출처}, {detailData?.출처1}</div>
        <hr />
      </div>
      <Nav/>
    </div>
    )
  }
}

export default Dictionary
