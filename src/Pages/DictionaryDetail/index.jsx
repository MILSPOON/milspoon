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
      <div>
      {detailData?.분류}
{detailData?.설명}
{detailData?.순번}
{detailData?.영문}
{detailData?.출처}
{detailData?.출처1}
{detailData?.표제어}
      </div>
    </div>
    )
  }
}

export default Dictionary
