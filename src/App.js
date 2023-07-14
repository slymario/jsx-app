import './App.css';
import Product from './components/Product';
import Card from './components/Card';

function App() {
  const firstName = prompt('Enter your First Name');
  return (

    <div className='card'>
      <Card/>

      <div className='card'>
          <h2 className='first'>Hello {firstName ? firstName : 'there'}!!!</h2>
          {firstName && <img src={Product.image} alt="Product" />}
      </div>

    </div>


  );
}
export default App;
