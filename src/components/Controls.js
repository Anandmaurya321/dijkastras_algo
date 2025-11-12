const Controls = props => {
  return (
    <div className='flex-col'>
      <div className='flex-row ControlsContainer'>
        <span className='heading'>Graph Pathfinding on the</span>
        <a
          className='headingBold'
          href={`https://en.wikipedia.org/wiki/London_Underground`}
          target='_blank'
          rel='noreferrer'
        >
          <span>London Tube</span>
        </a>
      </div>
      <div className='flex-row'>
        <span>
          This is an interactive visualisation for finding the shortest path between 2 stations in the
          MMMUT underground. Uses the <b>Dijkstra's graph pathfinding algorithm.</b>
        </span>
      </div>
     
    </div>
  );
};
export default Controls;
