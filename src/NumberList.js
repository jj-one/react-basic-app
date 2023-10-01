
function NumberList(props) {
  // const numbers = [1,2,2,3,4,5,6, 7];
  // const list = numbers.map((number, index) => <li key={index}>{number}</li>);
  if (!props.numbers) {
    return <h4>Sorry, no list was given!</h4>
  }
  return <ul>{props.numbers.map((number, index) => <li key={index}>{number}</li>)}</ul>;
}

export default NumberList;