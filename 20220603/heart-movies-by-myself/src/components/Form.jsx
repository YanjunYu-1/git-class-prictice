import {useState} from 'react'

const Form = ({searchMovies}) => {
    const [seatchValue, setSeatchValue] = useState("");

    const handleChange=(event)=>{
        setSeatchValue(event.target.value);
        // console.log(seatchValue)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();//阻止默认项
        searchMovies(seatchValue)//需要一个方法，通过关键字进行搜索，此方法需要传递
        //clear the form
        setSeatchValue("")
    }

    return (
        <form onSubmit={handleSubmit} id="search" className="search">
            <input 
                onChange={handleChange} 
                type="search" 
                placeholder="Search for a title..." 
                value={seatchValue} 
            />
        </form>
    );
}

export default Form;