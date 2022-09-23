function NftCard({ title, description, image, series, author, rating, price, isMintingNow }) {
    return (
        <div 
        className="shadow-2xl relative text-center text-black m-6 mt-4 mb-12 rounded-[40px] bg-slate-50 "
        >
            <img className=" h-80 w-full object-cover inset-x-0 top-0 rounded-t-[40px] " src={image}/>
            <div className="pt-4 pb-10 p-8">
            <p>{rating}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{series}</p>
            <p>{author}</p>
            {isMintingNow && <button onClick={() => {}}>MINT NOW</button>}
            <p>{price}</p>
            </div>
        </div>
    )
}

export default NftCard
