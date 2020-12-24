import {useState} from 'react';

function DarkMode() {
    const [theme,setTheme]=useState('light-mode');
    const toggleTheme=()=>{
        theme==='dark-mode'?setTheme('light-mode'):setTheme('dark-mode');
    }
    return [theme,toggleTheme];
}

export default DarkMode;
