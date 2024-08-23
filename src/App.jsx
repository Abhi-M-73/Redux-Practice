import { useDispatch } from 'react-redux'
import { useSelector } from'react-redux'
import { userDelete } from './Store/reducers/UserReducer'

function App() {

  const {user} = useSelector((state) => state.UserReducer)

  const dispatch = useDispatch()
  
  const deleteHandler = (index)=> {
    dispatch(userDelete(index))
  }


  return (
    <>
      <div className='h-screen w-full'>
        <div className='max-w-screen-xl mx-auto bg-red-300 mb-10'>
          <h1 className='font-sans font-semibold text-5xl'>Redux Toolkit</h1>
        </div>

        {user.map((item, index) => {
          return (<div key={index} className='max-w-screen-sm mx-auto bg-red-200 py-4 p-3 '>

            <h1 className='mt-1'>{item.title} <span onClick={()=>deleteHandler(index)} className='ml-5 font-semibold text-2xl text-red-600'>x</span></h1>
            
          </div>)
        })}

      </div>
    </>
  )
}

export default App
