import './score.css'

function Score(props) {
  return (
    <div className='score-area'>Runs: {props.runs}</div>
  )
}

export default Score