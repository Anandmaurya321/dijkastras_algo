

const Controls = props => {
  return (
    <div className='flex-col'>
      <div className='flex-row ControlsContainer'>
        <span className='heading'>Network Routing Path on</span>
        <a
          className='headingBold'
          href={`https://en.wikipedia.org/wiki/London_Underground`}
          target='_blank'
          rel='noreferrer'
        >
          <span>General MAP</span>
        </a>
      </div>
    
      <div className='flex-row'>
        <span>
          This is an interactive visualisation for finding the shortest path between 2 stations in the
          General Underground. Uses the <b>Dijkstra's graph pathfinding algorithm.</b>
        </span>
      </div>

      <div>
        <h3 className='flex-row'>Created by : Anand Maurya and Anuj Pratap Maurya</h3>
        <h3 className='flex-row'>Under guidence of Vimal sir</h3>
      </div>
     
    </div>
  );
};
export default Controls;
