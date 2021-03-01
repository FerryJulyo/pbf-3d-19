import logo from './logo.svg';
import './App.css';

function Kartu (props) {
  return <h1>Halo, {props.nim} - {props.nama}</h1>;
}

function App() {
  return (
    <div>
      <Kartu nim="1941723008" nama="Mohammad Ferry Julyo" />
      <Kartu nim="1941723800" nama="Mohammad Ferry Agustino" />
      <Kartu nim="1941723900" nama="Mohammad Ferry Septianto" />
    </div>
  );
}

export default App;