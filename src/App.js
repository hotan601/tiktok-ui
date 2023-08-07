import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { publicRouters } from '~/routes';
import DefaultLayout from '~/components/Layout/DefaultLayout';
function App() {
  return (
    <Router>
      <div className="App">
          <h1>Tap tanh code react</h1>
          <Routes>
              {publicRouters.map((route, index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />}  />
              })}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
