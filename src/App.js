import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";


import bg1 from './components/Layout/bg1.jpg';
import bg3 from './components/Layout/bg3.jpg'

function App() {
  return (
    <>
      <Header title={'This is title'} descr={'This is Description!'} />
        <Layout id={1} title={'title 1'} descr={'descr 1'} urlBg={bg1} />
        <Layout id={2} title={'title 2'} descr={'descr 2'} colorBg={'whitesmoke'} />
        <Layout id={3} title={'title 3'} descr={'descr 3'} urlBg={bg3} />
        <Footer />
    </>
  );
}

export default App;
