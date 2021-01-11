import logo from './logo.svg';
import './App.css';
import Card from './contact-card'
import Counter from './Counter'

function App() {
  return (
    <div>
      <Card name="Karim" phone="123-456-789" email="@gmail"/>
      <Card name="Karim" phone="123-456-789" email="@gmail"/>
      <Card name="Karim" phone="123-456-789" email="@gmail"/>

      <Counter number="0"/>
    </div>
  );
}

export default App;
