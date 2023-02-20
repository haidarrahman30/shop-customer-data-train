import { Menu, MenuProps } from "antd"


const sideMenuStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#4a6fa5',
    
  };

const items1: MenuProps['items'] = ['Dashboard', 'Customers'].map((key) => ({
    key,
    label: `${key}`,
  }));

const SideMenu = () =>{
    return(
        <Menu 
        style={sideMenuStyle}
        theme="light"
        items={items1}
        />
    )
}

export default SideMenu