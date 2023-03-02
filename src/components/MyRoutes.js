import { Route, Routes } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Navbar from './Navbar';
import Quotes from './Quotes';

export default function MyRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="calculator" element=<Calculator /> />
        <Route path="quotes" element=<Quotes /> />
      </Routes>
    </>
  );
}
