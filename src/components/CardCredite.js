function CardCredite({id, name,profile_path}) {
    
    return (
        <>
         <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card">
                <img src={profile_path} className="card-img-top" alt="card"/>
                <div className="card-body">
                    <a className="card-text" href={`/detail/${id}`}>
                        {name}
                    </a>
                </div>  
            </div>
        </div>
         
        </>
       

    )
}
export default CardCredite;