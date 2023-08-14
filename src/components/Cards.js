function Cards({ id, poster_path, title, release_date}) {
    
    return (
        <>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card">
                <a href={`/detail/${id}`}>
                <img src={poster_path} className="card-img-top" alt="card" />   
                </a>               
                <div className="card-body">
                    <a className="card-text" href={`/detail/${id}`}>
                        {title}
                    </a>
                    <p className="card-text ">{release_date} </p>
                </div>  
            </div>
        </div>

       
         
        </>
       

    )
}
export default Cards;
