
export default function Homepage({ selectedPic }) {
    return (
        <div className="main-content">
            {
                selectedPic === 'food' ? <img className="frontImg" src="/food.jpg" alt="front-img" /> :
                    selectedPic === 'places' ? <img className="frontImg" src="/city.jpg" alt="front-img" /> :
                        <img className="frontImg" src="/things.jpg" alt="front-img" />
            }
        </div>
    )
}