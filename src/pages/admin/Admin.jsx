import AddProduct from './AddProduct'
import { Container, Main, Sidebar, SidebarItem, SidebarList } from './adminStyle'
import {StyledLink} from '../../globalStyles/globalStyles'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
   <Container>
     <Sidebar>
            <SidebarList>
         <SidebarItem><StyledLink to='/admin/add'>Add Product</StyledLink> </SidebarItem>
         <SidebarItem><StyledLink to='/admin/update'>Update Product</StyledLink></SidebarItem>
         <SidebarItem><StyledLink to='/admin/remove'>Remove Product</StyledLink></SidebarItem>
         <SidebarItem><StyledLink to='/admin/make'>Make Admin</StyledLink></SidebarItem>
       </SidebarList>
     </Sidebar>
     <Main>
       <Outlet/>
     </Main>
   </Container>
  )
}

export default Admin