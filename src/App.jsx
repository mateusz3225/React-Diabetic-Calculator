import { useState } from 'react'
import styles from './App.module.css'

function App() {

  const [ratio,setRatio] = useState(0)
  const [carbs,setCarbs] = useState(0)
  const [fat,setFat] = useState(0)
  const [protein,setProtein] = useState(0)


  return (
    <div className={styles.container}>
    <div className={styles.MainBox}>
      <div>
        <h1 className={styles.title}>Insulin calculator</h1>
        <h4>Enter your carbs and carb ratio to calculate needed insulin.</h4>
      <Bar value={ratio} text="Carbs ratio: " onChange={setRatio}></Bar>
      <Bar value={carbs} text="Carbs (g): " onChange={setCarbs}></Bar>
      <br />
      <div className={styles.text}>Optional:</div>
      <Bar value={fat} text="Fat (g): " onChange={setFat}></Bar>
      <Bar value={protein} text="Protein (g): " onChange={setProtein}></Bar>
     </div>
     <div className={styles.outputBox}>
       {carbs>0.01 && ratio>0.01 && `You need ${(carbs/ratio).toFixed(2)} of fast acting insuline for this meal.` } <br/>
       {fat>0.01 && protein>0.01 && `You need ${(((fat*9)+(protein*4))/100*(10/ratio*0.8)).toFixed(2)} of long acting insuline for this meal.`}
      </div>
      <div className={styles.divbutton}><button className={styles.button}
        onClick={()=> {
          setFat(0);
          setCarbs(0);
          setProtein(0);
        }}
      >Reset Macros</button> </div>
      <div className={styles.infotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
    
    </div>
  )
}

function Bar({value, text,onChange}) {
return (
  <label className={styles.bar}> 
    <div>{text}</div> 
    <input type='number' max={3} step={0.1} value={value || ''} 
    onChange={(e) => 
      {
        if(e.target.value.length<6) {onChange(e.target.value)}
      }}>
    </input>
  </label>
)
}

export default App
