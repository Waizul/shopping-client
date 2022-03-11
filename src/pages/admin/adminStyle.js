import styled from 'styled-components'

export const Container = styled.div`
display:flex ;
height:calc( 100vh - 50px) ;
`
export const Sidebar = styled.div`
flex:3 ;
padding:50px 10px ;
background-color:whitesmoke ;
height: 100%;
margin-right:10px ;
`
export const SidebarList = styled.ul`

`
export const SidebarItem = styled.li`
list-style:none ;
font-weight:bold ;
font-size: 18px;
margin:10px 0 ;
cursor:pointer ;
color:black ;

&:hover{
    color: gray
}
`

export const Main = styled.div`
flex:9 ;
/* padding: 50px ; */
`

