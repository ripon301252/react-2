export default function Button() {
    function handleClick(){
      alert('button clicked')
  }
  
  const handleClick2 = () => {
      alert('button 2 clicked')
  }
  
  const addToFive = (num) =>{
      alert(num + 5);
  }

  const buttonStyle ={
    margin : '15px',
    padding : '15px',
    border : '2px solid red',
    borderRadius : '10px'
  }
  
  return(
      <div style={buttonStyle}>
          <button  onClick={handleClick}>Click Me</button>
          <button onClick={handleClick2}>Click 2</button>
           <button onClick={() =>{alert('third clicked')}}>third</button>
           <button onClick={() => addToFive(3)}>Four</button>
      </div>
  )
}