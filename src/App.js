import { Footer } from './components/index';
import { Header } from './components/header';
import { AllRoutes } from './routes/AllRoutes';
import './App.css';

function App() {
  return (
    <div className="App  bg-gray-50 dark:bg-gray-200 sm:text-md p-2">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
