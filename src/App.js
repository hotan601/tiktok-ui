import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { publicRouters } from '~/routes';
import { DefaultLayout} from '~/components/Layout/';
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <div className="App">
          <h1>Tap tanh code react</h1>
          <Routes>
              {publicRouters.map((route, index) => {
                //const Layout = route.layout === null ? Fragment : DefaultLayout;//Fragment: component used to chuaws, khong sinh ra the that o trong DOM.
                let Layout = DefaultLayout;
                if (route.layout) {
                  Layout  = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
                const Page = route.component;
                return (
                  <Route 
                    key={index} 
                    path={route.path} 
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }  
                  />
                )
              })}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
