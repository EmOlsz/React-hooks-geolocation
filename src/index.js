import React from 'react';
import ReactDOM from 'react-dom';

import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';
import useLocation from './hooks/useLocation';

const App = () => {
  const [lat, errorMessage] = useLocation();

  const renderContent = () => {
    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat} />;
    }

    return <Spinner message="Please accept location request" />;
  };
  
  return <div className="border red">{renderContent()}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
