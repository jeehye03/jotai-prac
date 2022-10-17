
import { useAtom } from 'jotai';
import { countAtom } from './atoms';

const Counter = () => {
  const [count,increase] = useAtom(countAtom);
  return (
    <>
      <input value={count} readOnly /> 
      <button onClick={increase}>Count</button>
    </>
  )
}

const App = () => (
  <div className="App">
    <Counter/>
  </div>
)
export default App;
