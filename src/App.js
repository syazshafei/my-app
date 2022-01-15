import myData from './data.json';

function App() {
  return (
    <div>
      <h2>Problem: Write a program that produces a list of each pair of names which have 2 or more tags in common</h2>
      <h3>Testing loading the data.json:</h3>
      <ul>
        {myData.recipients.map((item, i) => {
          return <li key={i}>{item.tags}, {item.name}, {item.id}</li>
        })}
      </ul>
      
      <h3>Solution</h3>
      <ul>
        
      </ul>
        Do a looping to check the intersection between the JSON objects?
    </div>
  )
}

export default App;
