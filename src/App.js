import HeartLogo from './heart.svg';
import './App.css';
import Header from './Header';

const message = 'cool cud';

const Heart = (props) => {
  return (
    <div className='heart'>
      <img className='heart-img' src={HeartLogo} alt='heart' />
      <p className='heart-message'>{props.msg}</p>
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <Heart msg={message} />;
    </>
  );
}

export default App;
