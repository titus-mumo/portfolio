import { Header, Footer } from './components/index';
import { AllRoutes } from './routes/AllRoutes';
import './App.css';

function App() {
  return (
    <div className="App  bg-gray-50 dark:bg-gray-200 sm:text-md">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
