
const card = (
            <div className="item">
                    <img src="https://source.unsplash.com/featured/400x300/?food" alt="" />

                    <div className="desc">
                        <span>$220</span>
                        <h3>Comfort Grey Sneakers</h3>
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum impedit veniam</p>
                        <button>Add to Cart</button>
                    </div>

            </div>
)

export default function Body() {
        return(
            <>  
            
                <div className="container">

           
                    <div className="main">
                        <div className="container-icon">
                                   
                                {card}
                                {card}
                                {card}
                                {card}
                                {card}
                                {card}
                        </div>

                    </div>

                </div>    
            </>
        )
}