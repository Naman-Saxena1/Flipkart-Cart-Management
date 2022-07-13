import {
    Sidebar,
    ProductsListContainerGrid
} from "../../components/index"

function Home()
{
    return (
        <div className='content-container'>
          <Sidebar/>
          <ProductsListContainerGrid/>
        </div>
    )
}

export { Home }