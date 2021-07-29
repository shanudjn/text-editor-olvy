
import './App.css';
import Editor from './Components/Editor/Editor';
import Tips from './Components/Tips/Tips';

function App() {
  return (
    <div className="App flex flex-col justify-between">
      <header className={`text-4xl font-bold m-2`}>
        Olvy Text Editor
      </header>
      <div className={`w-full px-4 md:px-0 md:w-8/12 h-5/6 m-auto mt-8`}>
        <Editor />

        <Tips />
      </div>

    </div>
  );
}

export default App;
