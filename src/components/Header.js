export default function Header({ setSelectedPic }) {
    const handleFood = () => {
        setSelectedPic("food");
    }
    const handleProducts = () => {
        setSelectedPic("things");
    }
    const handleCities = () => {
        setSelectedPic("places");
    }

    return (
        <div>
            <div className="site-branding">
                <h1>Bruce Zha</h1>
            </div>
            <div className="secondary-menu">
                <ul>
                    <li onMouseOver={handleFood} className="menu-item" style={{ display: 'inline-block' }}>Food</li>
                    <li onMouseOver={handleProducts} className="menu-item" style={{ display: 'inline-block' }}>Things</li>
                    <li onMouseOver={handleCities} className="menu-item" style={{ display: 'inline-block' }}>Places</li>
                </ul>
            </div>
        </div>
    )
}