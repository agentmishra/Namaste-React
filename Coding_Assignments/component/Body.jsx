import { restrautList } from "../data/resurantList"

const searchbar = (
    <div className="search">
        <form action="#">
            <input type="text" placeholder="What are you looking for 🔎🧐🕵" name="search"/>
            <button className="btn">Search</button>      
        </form>
    </div>
)



const card = (
            <div className="item">
                    <img src="https://source.unsplash.com/featured/400x300/?food" alt="" />

                    <div className="desc">
                        <span>{restrautList[0].data?.costForTwoString ?? "₹100 FOR TWO"}</span>
                        <h3>{restrautList[0].data?.name}</h3>
                         <p>{restrautList[0].data?.address}</p>
                        <button>Add to Cart</button>
                    </div>

            </div>
)

export default function Body() {
        return(
            <>  
            
                <div className="container">
                    {searchbar}
           
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