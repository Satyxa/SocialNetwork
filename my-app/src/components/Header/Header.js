import './Header.css';

function Header() {
    return (
        <div className="Header test">
            <header className='cap'>
                <div className="cap__container">

                    <h1 className="vkontakte">ВКОНТАКТЕ</h1>
                    <input type="search" className="search" placeholder="seacrh"></input>

                </div>
            </header>
        </div>
    );
}

export default Header;