import './toggle.css'
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { ThemeContext } from '../../context'
import { useContext } from 'react'


const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleCLick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }

    return (
        <div className="t" onClick={handleCLick}  >
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <div className="t-button" style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle
