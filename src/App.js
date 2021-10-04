import './App.css';
import UserDisplay from './components/userDisplay';
import { Container, Content } from './components/userDisplay/style';
import UserRender from './components/userRender';

function App() {
  return (
    <div>
      <Container>
      <Content>
        <UserRender />
       
          <UserDisplay />
        </Content>
      </Container>
    </div>


  );
}

export default App;
