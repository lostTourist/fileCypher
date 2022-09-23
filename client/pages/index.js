import Head from "next/head"
import { useState } from "react"
import styles from "../styles/Home.module.css"
import MarketCard from "../components/MarketCard"
import NftCard from "../components/NftCard"
import MainHeader from "../components/MainHeader"
import MainNav from "../components/MainNav"
import FooterMod from "../components/FooterMod"

const nfts = [
    {
        id: 1,
        title: "TITLE",
        description:
            "Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore",
        series: "SERIES",
        author: "Author",
        rating: 75,
        price: 45,
        image: "https://images.unsplash.com/photo-1527610276295-f4c1b38decc5",
    },
    {
        id: 2,
        title: "TITLE",
        description:
            "Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore",
        series: "SERIES",
        author: "Author",
        rating: 75,
        price: 45,
        image: "https://images.unsplash.com/photo-1527610276295-f4c1b38decc5",
    },
    {
        id: 3,
        title: "TITLE",
        description:
            "Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore",
        series: "SERIES",
        author: "Author",
        rating: 75,
        price: 45,
        image: "https://images.unsplash.com/photo-1527610276295-f4c1b38decc5",
    },
    {
        id: 4,
        title: "TITLE",
        description:
            "Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore",
        series: "SERIES",
        author: "Author",
        rating: 75,
        price: 45,
        image: "https://images.unsplash.com/photo-1527610276295-f4c1b38decc5",
    },
    {
        id: 5,
        title: "TITLE",
        description:
            "Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore",
        series: "SERIES",
        author: "Author",
        rating: 75,
        price: 45,
        image: "https://images.unsplash.com/photo-1527610276295-f4c1b38decc5",
    }
]

export default function Home() {
    const [isBoolean, setIsBoolean] = useState(false)

    function handler() {
        console.log("clicked")
        setIsBoolean((currentIsBoolean) => {
            return !currentIsBoolean
        })
        console.log(isBoolean)
    }

    return (
        <>  {/*NAVBAR*/}

            <MainNav />


            {/*HEADER*/}

            <div className="position-relative" >
                <MainHeader
                    backgroundImage="https://images.pexels.com/photos/8531176/pexels-photo-8531176.jpeg"
                />
            </div>

            {/*SUBNAV*/}

            <div className="flex flex-col md:flex-row justify-center place-content-center pt-10 pb-10 bg-gradient-to-br from-[#0f5f4b] to-[#09152f] shadow-lg">
                <MarketCard
                    title="Market"
                    description="Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore"
                    buttonName="MARKET"
                    buttonURL="#"
                    const buttonHandler={() => { }}
                />
                <MarketCard
                    title="Dashboard"
                    description="Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore"
                    buttonName="DASHBOARD"
                    buttonURL="#"
                    constbuttonHandler={() => { }}
                />
                <MarketCard
                    title="Publish"
                    description="Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore"
                    buttonName="PUBLISH"
                    buttonURL="#"
                    const buttonHandler={() => { }}
                />
            </div>


            <div className="bg-slate-300 shadow-inner">
                <div className="p-10 pb-0"><p>Minting Now</p>
                    <p>view more...</p></div>
                <div className="flex flex-col md:flex-row justify-center place-content-center pt-10 pb-10">
                    {nfts.map((nft) => (
                    <NftCard
                        key={nft.id}
                        title={nft.title}
                        description={nft.description}
                        series={nft.series}
                        author={nft.author}
                        rating={nft.rating}
                        price={nft.price}
                        image={nft.image}
                        isMintingNow={true}
                    />
                ))}
                </div>

            </div>
            <div className="bg-slate-100 shadow-inner">
            <div className="p-10 pb-0"><p>Top Sellers</p>
                <p>view more...</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center place-content-center pt-10 pb-10">
                    {nfts.map((nft) => (
                    <NftCard
                        key={nft.id}
                        title={nft.title}
                        description={nft.description}
                        series={nft.series}
                        author={nft.author}
                        rating={nft.rating}
                        price={nft.price}
                        image={nft.image}
                        isMintingNow={false}
                    />
                ))}
            </div>
            </div>

            {/*SUBNAV*/}

            <div className="flex flex-col md:flex-row justify-center place-content-center pt-10 pb-10 bg-gradient-to-br from-[#0f5f4b] to-[#09152f] shadow-lg">
                <FooterMod />
            </div>
        </>
    )
}
