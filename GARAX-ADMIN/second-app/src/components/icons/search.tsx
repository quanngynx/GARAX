import { SearchOutlined } from '@ant-design/icons';

interface ISearchOutlinedIcon {
    classname: string
}

function SearchOutlinedIcon({ classname } : ISearchOutlinedIcon) {
    return ( 
        <SearchOutlined  className={classname}/>
     );
}

export default SearchOutlinedIcon;