import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Home = () => {
    // https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
    const [dataRecipe, setdataRecipe] = useState([]);
    const [search,setSearch]=useState();

   async function getData(){
        let res = await fetch(`https://api.edamam.com/search?q=pizza&app_id=7442af9a&app_key=3a95c099faea27e5c7bcc842f1bb689b`)

        let data = await res.json();

        console.log(data.hits)
        setdataRecipe(data.hits)

    }

    const handleChange=(event)=>{
        
        setSearch(event.target.value);
    }
     const handleSearch=async(e)=>{
      e.preventDefault();
      console.log('running')
      let res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=7442af9a&app_key=3a95c099faea27e5c7bcc842f1bb689b`)

        let data = await res.json();

        console.log(data.hits)
        setdataRecipe(data.hits)

     }
   
    useEffect(()=>{
        getData()
    },[])

    // const handleClick = (ans)=>{
    //   // console.log(item[i])
    //   console.log(ans.recipe)
    // }
  return (
    <>
    <Navbar/>
    <div>
      
      <form action="" onSubmit={handleSearch}>
        <input type="text" placeholder="Search recipe here..." onChange={handleChange} />
        <button type='submit'>Search</button>
      </form>
      <div className=''  style={{display:"grid",gridTemplateColumns:"450px 450px 450px",gap:"20px",marginLeft:"120px"}}>
      {/* <h3>home page</h3> */}

      {
        dataRecipe.map((ele,i)=>{
            return <Card className='col-span-3 p-2 border border-gray-500' sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={ele.recipe.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                    {ele.recipe.label}
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <Link state={ele.recipe} to={'/view'} size="small">View recipe</Link>
              {/* <button onClick={()=>handleClick(ele)}>click me</button> */}
            </CardActions>
          </Card>
        })
      }
    </div>
    </div>
    </>
  )
}

export default Home