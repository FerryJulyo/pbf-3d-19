import logo from './logo.svg';
import './App.css';

function App() {
  let me = {name:"Mohammad Ferry Julyo", avatarUrl:logo}
  return (
    <div>
      <Komentar text="Knowing is not enought, we must apply" date="27 Februari 2021" author={me} />
    </div>
  );
}

function Avatar (props) {
  return (
    <img width="77px" className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo (props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Komentar (props) {
  return (
    <div className="Komentar">
      <UserInfo user={props.author} />
      <div className="Komentar-text">
        {props.text}
      </div>
      <div className="Komentar-date">
        {props.date}
      </div>
    </div>
  );
}

export default App;