import Dropdown from "./components/organisms/Dropdown";

function App() {
  const options = [
    {id:1, label: 'Education'},
    {id:2, label: 'Yeeeah, science!'},
    {id:3, label: 'Art'},
    {id:4, label: 'Sport'},
    {id:5, label: 'Games'},
    {id:6, label: 'Health'},
];

return (
    <div className="App">
  <Dropdown
            items={options}
        />   
         </div>
  );
}

export default App;
