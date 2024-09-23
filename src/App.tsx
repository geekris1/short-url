import './App.css'

function App() {

  return (
    <div className='flex flex-col flex-items-center p-t-30vh'>
      <input
        className='w-100 h-6 rounded-1 rounded-1 b-2 b-solid b-#505050 hover-b-#707070 focus-b-#707070 p-2 text-4.5'
        placeholder='Type to url...'
      ></input>
      <button className='m-t-6'>generate</button>
    </div>
  )
}

export default App
