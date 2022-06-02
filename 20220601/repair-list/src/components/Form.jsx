import { useState } from "react";

const Form = ({ addRepair }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange=(event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    //     console.log(setInputValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();//阻止链接打开 URL阻止刷新
        // console.log("submit event fired");
        addRepair(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                // onChange={(event) => setInputValue(event.target.value)}
                onChange={handleChange}
                className="new-repair"
                placeholder="What needs to be repaired?"
                autofocus=""
                value={inputValue}
            />
        </form>
    );
}

export default Form;