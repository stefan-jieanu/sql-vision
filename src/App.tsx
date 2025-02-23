import './App.css'
import Diagram from './components/Diagram'
import TextEditor from './components/TextEditor'
import { Schema } from './Schema';

function App() {

  const schema = new Schema();

  return (
    <div className='flex gap-8 h-full p-4'>
      <TextEditor schema={schema} />
      <Diagram className='w-full' x={200} y={100} schema={schema} />
    </div>
  )
}

export default App
