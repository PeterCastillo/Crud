import Form from "./components/Form"
import { useSelector } from "react-redux"
import { RootState } from "./redux/reducers/reducer"
import ThingToDo from "./components/ThingToDo"
import { TareasCointainer } from "./style/app"

function App() {

  const state = useSelector((state:RootState) => state)
  const { tareas } = state.user

  return (
    <div className="App">
      <Form/>
      <TareasCointainer>
        {
          tareas.length > 1
          ? tareas.map(item => (
            <ThingToDo key={item.descripcionTarea} infoTarea={item}/>
          ))
          :<></>
        }
      </TareasCointainer>
    </div>
  )
}

export default App
