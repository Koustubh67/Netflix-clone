import './App.css';
import Rows from './components/Rows';
import request from './components/request'
import Banner from './components/Banner'


function App() {
  
  
  return (
    <div className="app">
      <Banner/>
      <Rows title={'NETFLIX ORIGINALS'} fetchURL={request.fetchOriginals} largeRow/>
      <Rows title={'TRENDING NOW'} fetchURL={request.fetchTrending}/>
      <Rows title={'TOP RATED'} fetchURL={request.fetchTopRated}/>
      <Rows title={'ACTION MOVIES'} fetchURL={request.fetchAction}/>
      <Rows title={'COMEDY MOVIES'} fetchURL={request.fetchComedy}/>
    </div>
      
  )
}
export default App;