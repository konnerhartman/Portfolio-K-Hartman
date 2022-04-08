import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Footer from './components/Footer'
import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: (httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/projects" component={Projects} />
                <Route component={NoMatch} />
              </Switch>
            </main>
            <footer>
              <Footer />
            </footer>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
