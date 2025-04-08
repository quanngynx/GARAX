import { CloudUploadOutlined } from '@ant-design/icons';

interface IUploadOutline {
    ClassName?: string
}
function UploadOutline({ ClassName } : IUploadOutline) {
    return ( 
        <CloudUploadOutlined className={ClassName}/>
     );
}

export default UploadOutline;