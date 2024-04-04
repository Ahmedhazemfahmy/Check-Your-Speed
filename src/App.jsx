import Player from './components/Player.jsx';
import TimerChallenge from './components/timerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={'Easy'} targetTime={1} />
        <TimerChallenge title={'warming'} targetTime={5} />
        <TimerChallenge title={'Rocking'} targetTime={10} />
        <TimerChallenge title={'BEAT IT'} targetTime={15} />
      </div>
    </>
  );
}

export default App;
