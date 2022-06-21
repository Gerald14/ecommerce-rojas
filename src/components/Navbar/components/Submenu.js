import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'

const Submenu = ({items,anchorEl,hideSubmenu}) => {

    const  navigate = useNavigate();

    const handleClick = (id) => {
        hideSubmenu()
        console.log(id)
        navigate(`/category/${id}`)
    }
    

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
      {items.map((item)=>
        <MenuItem key={item.id} onClick={()=>handleClick(item.path)}>{item.title}</MenuItem>
      )}
    </Menu>
  )
}

export default Submenu