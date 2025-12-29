import { useState } from 'react';
import { Header } from './components';
import { Home, Notes } from './pages';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'notes':
        return <Notes />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;