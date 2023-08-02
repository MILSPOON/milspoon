/* eslint-disable react/prop-types */
import './style.css'

import SAMPLE_LIST from '../../data/sampleDictionary.json'
import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'

function Dictionary () {
  const [searchParams] = useSearchParams()

  const number = useMemo(() => searchParams.get('number'), [])

  const detailData = useMemo(() => number ? SAMPLE_LIST[number] : undefined, [number])

  if (number) {
    return (
    <div>
      <div className="menubar">
        <p>용어 상세</p>
      </div>
      <div className='dictionary_word'>
        <div className='word_classification'>분류:{detailData?.분류}</div>
        <div className='word_explane'>설명:{detailData?.설명}</div>
        <div className='word_whence'>출처:{detailData?.출처}, {detailData?.출처1}</div>
      </div>
    </div>
    )
  }
}

export default Dictionary
