// rafce
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  const {allProducts,loading} = useSelector(state=>state.productReducer)
  const [currentPage,setCurrentPage]=useState(1)
  const productsPerPage = 9
  const totalPages = Math.ceil(allProducts?.length/productsPerPage)
  const currentPageProductLastIndex = currentPage * productsPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex-productsPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)

  useEffect(()=>{
     dispatch(fetchProducts())
  },[])

  const navigateToNextPage = ()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToPrevPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
     {
      loading ?
      <div className="flex justify-center items-center my-5 text-lg">
        <img width={'50px'} height={'50px'} className='me-3' src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
        Loading...
      </div>
      :
      <>
      <div className="grid  grid-cols-3 gap-4">
        { 
          allProducts?.length>0 ?
          visibleAllProducts?.map(product=>(
        <div key={product?.id} className="rounded border p-2 shadow">
        <img width={'100%'} height={'100%'} src={product?.image}  alt="" />
        <div className="text-center">
          <h3 className='text-xl font-bold'>{product?.name}</h3>
          <Link to={`/${product?.id}/view`} className='bg-amber-600 rounded p-1 mt-3 text-white inline-block'>
          ABOUT</Link>
        </div>
      </div>
      ))
        :
        <div className="flex justify-center items-center font-bold text-red-600 my-5 text-lg">
          Food Items Not Found!!!
        </div>
        }
      </div>
      <div className="text-2xl text-center font-bold mt-20">
        <span onClick={navigateToPrevPage} className="curson-pointer"> <i className="fa-solid fa-backward me-5"></i> </span>
        <span>{currentPage} of {totalPages}</span>
        <span onClick={navigateToNextPage} className="curson-pointer"> <i className="fa-solid fa-forward ms-5"></i> </span>

      </div>
      </>
}
    </div>
    </>
  )
}
export default Home