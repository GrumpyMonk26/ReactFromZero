const Header = ({ title }) => {

    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'My Groceries List'
}

export default Header;