import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { database } from '../../../firebase';

const Submenu = ({anchorEl,hideSubmenu}) => {

    const  navigate = useNavigate();
    const [categories, setCategories] = useState([])

    const handleClick = (id) => {
        hideSubmenu()
        navigate(`/category/${id}`)
    }

    useEffect(() => {
      const categoryCollection = collection(database,'categories');
      const consulta = getDocs(query(categoryCollection,orderBy('name')))
    
      consulta.then((result)=>{
        let categoriesResult = result.docs.map(category =>({...category.data(),id:category.id}));
        setCategories(categoriesResult);
      })
      return () => {
        setCategories([])
      }
    }, [])

  return (
    <Menu 
        id=""
        anchorEl={anchorEl} 
        open={Boolean(anchorEl)} 
        anchorReference="anchorPosition"
        onClose={hideSubmenu}
        anchorPosition={{ top: 64, left: 260 }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
    >
      {categories.map((category)=>
        <MenuItem key={category.id} onClick={()=>handleClick(category.name)}>{category.name}</MenuItem>
      )}
    </Menu>
  )
}

export default Submenu