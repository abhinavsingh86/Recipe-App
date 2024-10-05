import { useLocation } from 'react-router-dom'

const ViewRecipe = () => {

    let location = useLocation() // {}
    console.log(location)

    let nutrientsArr = Object.entries(location.state.totalNutrients);
    console.log(nutrientsArr)


  return (
          <div className='pt-2'>
        
        <div className=''style={{display:'flex',gap:"50px",margin:"50px",}}>
          <div className="left">
            <img src={location.state.image} alt="" />
          </div>
          <div className="right" style={{marginTop:"30px",fontSize:"30px",color:"blue"}}>
            <h2 className='text-5xl'>Title : <small>{location.state.label}</small></h2>0m]m+
            <h3 className='my-2 text-2xl'>Cuisine Type: {location.state.cuisineType}</h3>
            <h4>Meal Type: {location.state.mealType}</h4>
            <button type='button' className='bg-green-600 p-2 rounded my-2' >View Full recipe</button>
          </div>
        </div>

        <div className='my-2 p-3 w-[80%] m-auto flex gap-9'>
          <ul className='list-disc ' type="disk">
            <b>Ingredients</b>
            {
              location.state.ingredientLines.map((ele)=>{
                return <li className='list-disc'>{ele}</li>
              })
            }
          </ul>
          <ul className='list-disc ' type="disk">
            <b>Health labels</b>
            {
              location.state.healthLabels.map((ele)=>{
                return <li className='list-disc'>{ele}</li>
              })
            }
          </ul>

          
        </div>

        <div>
          

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                
            </tr>
        </thead>
        <tbody>
          
            {
           nutrientsArr.map(([key,value])=>{
            return <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {key}
            </th>
            <td class="px-6 py-4">
                {value.label}
            </td>
            <td class="px-6 py-4">
                {value.quantity.toFixed(2)}
            </td>
            <td class="px-6 py-4">
               {value.unit}
            </td>
           
        </tr>
           })
          }
           
        
        </tbody>
    </table>
</div>



         
        </div>
    </div>
  )
}

        
    

export default ViewRecipe