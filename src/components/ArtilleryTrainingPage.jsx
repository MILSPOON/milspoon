import '../global.css'

function ArtilleryTrainingPage () {
  const iframePart = { __html: '<iframe src="" width="200px" height="400px"></iframe>' }

  return (
    <div dangerouslySetInnerHTML={iframePart}></div>
  )
}

export { ArtilleryTrainingPage }
