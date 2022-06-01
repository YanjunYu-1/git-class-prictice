const Header = () => {
    return (
        <header className="header">
            <h1>rep🔥irs</h1>
            <form>
                <input 
                    className="new-repair" 
                    placeholder="What needs to be repaired?" 
                    autofocus="" 
                />
            </form>
        </header>
    );
}

export default Header;