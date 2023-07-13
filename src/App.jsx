import { useState } from 'react'
import './App.css'
// import Table1 from './examples/Table-1/Table1'
// import Table2 from './examples/Table-2/Table2'
import Table3 from './examples/Table-3/Table3'

function App() {
  const [initialPos, setInitialPos] = useState(null)
  const [initialSize, setInitialSize] = useState(null)

  const initial = (e) => {
    let resizable = document.getElementById('app__content')
    event.dataTransfer.setDragImage(new Image(), 0, 0)

    setInitialPos(e.clientY)
    setInitialSize(resizable.offsetHeight)
  }

  const resize = (e) => {
    let resizable = document.getElementById('app__content')
    const computedStyle = getComputedStyle(resizable)
    const minHeight = parseInt(computedStyle.minHeight)
    const maxHeigth = parseInt(computedStyle.maxHeight)

    const newHeight = parseInt(initialSize) + parseInt(e.clientY - initialPos)

    if (newHeight < minHeight || newHeight > maxHeigth) return

    resizable.style.height = `${newHeight}px`
  }

  return (
    <div className='app'>
      <div className='app__content' id='app__content'>
        {/* <Table1 /> */}
        {/* <Table2 /> */}
        <div className='app__hero'>kek</div>
        <div className='app__container'>
          <div className='app__header'>app header</div>
          <div className='app__container-content'>
            <h1 className='app__container-content-title'>TITLE</h1>
            <div className='app__table-container'>
              <Table3 />
            </div>
          </div>
          <div className='app__footer'>app footer</div>
        </div>
      </div>
      <div
        id='app__resizer'
        className='app__resizer'
        draggable='true'
        onDragStart={initial}
        onDrag={resize}
      >
        resize &#11135;
      </div>
    </div>
  )
}

export default App
