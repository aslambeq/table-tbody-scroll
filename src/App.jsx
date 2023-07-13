import './App.css'
// import Table1 from './examples/Table-1/Table1'
// import Table2 from './examples/Table-2/Table2'
import Table3 from './examples/Table-3/Table3'

function App() {
  return (
    <div className='app'>
      {/* <Table1 /> */}
      {/* <Table2 /> */}
      <div className='app__hero'>kek</div>
      <div className='app__table-container'>
        <div className='app__table-kek-title'></div>
        <Table3 />
        <div className='app__table-kek-footer'></div>
      </div>
    </div>
  )
}

export default App
