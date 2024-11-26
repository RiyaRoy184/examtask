import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const View = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()


    useEffect(() => {
        if (sessionStorage.getItem("allProducts")) {
            const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
            setProduct(allProducts.find(item => item.id == id))
        }
    }, [])

    return (
        <>
            <Header />
            <div className='flex flex-col mx-5'>
                <div className="grid grid-cols-2 items-center h-screen">
                    <div>
                        <img className='ms-40 border rounded-xl' width={'350px'} height={'250px'} src={product?.image} alt="" />
                    </div>
                    <div>
                        <h3 className='font-bold'>ID:{product?.id}</h3>
                        <h4 className="font-bold text-red-600 text-2xl">{product?.mealType}</h4>
                        <h1 className="text-5xl font-bold">{product?.name}</h1><br />
                        <h2 className="text-2xl  font-bold">Cuisine : {product?.cuisine}</h2>
                        <h3 className="font-bold mt-4">INGREDIENTS</h3>
                        {
                            product?.ingredients?.map((ingredients, index) => (
                                <div >
                                    {<li key={index}>{ingredients}</li>}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="ms-40">
                    <h3 className='text-xl font-bold'>Rating : {product?.rating} <i className='fa-solid fa-star text-yellow-400'></i></h3>
                    <h3 className='text-xl font-bold'>ReviewCount : {product?.reviewCount} </h3>
                    <h3 className="font-bold mt-4">INSTRUCTIONS</h3>
                    {
                        product?.instructions?.map((instructions, index) => (
                            <div >
                                {<li key={index}>{instructions}</li>}
                            </div>
                        ))
                    }
                    <h3 className="font-bold mt-4">TAGS</h3>
                    {
                        product?.tags?.map((tags, index) => (
                            <div >
                                {<li key={index}>{tags}</li>}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default View