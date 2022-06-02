const Footer = ({clearComplted}) => {
    return (
    <footer className="footer">
        <button onClick={clearComplted} className="clear-completed">
            Clear completed
        </button>
    </footer>);
}

export default Footer;