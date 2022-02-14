import '../styles/welcome.css'
import Typing from 'react-typing-animation'

export default function() {
  return (
    <div id="main" className="welcome">
      <div className="introduction">
        <Typing speed={70}>
          <span>Hi, I am rocking1001</span>
          <Typing.Delay ms={500} />
          <Typing.Backspace count={11} />
          <span>thepiguy</span>
          <Typing.Delay ms={500} />
          <Typing.Backspace count={8} />
          <span style={{color: "pink", backgroundColor: "black"}}>Kunal Dandekar </span>
        </Typing>
      </div>
    </div>
    
  )
}