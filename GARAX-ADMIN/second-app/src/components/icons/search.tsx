import { SearchOutlined } from '@ant-design/icons';
import { CSSProperties } from 'react';

interface ISearchOutlinedIcon {
    classname: string
    styled: CSSProperties
}

function SearchOutlinedIcon({ classname, styled } : ISearchOutlinedIcon) {
    return ( 
        <SearchOutlined  className={classname} style={styled}/>
     );
}

export default SearchOutlinedIcon;