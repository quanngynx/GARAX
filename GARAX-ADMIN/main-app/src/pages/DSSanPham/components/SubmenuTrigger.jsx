import EditSolidTiny from '../../../assets/edit-solid-tinty.svg?react'

const SubmenuTrigger = ({className, onClick}) => {
    return (
        <button className={className || ''} onClick={onClick} aria-label="Open submenu">
            <EditSolidTiny />
        </button>
    )
}

export default SubmenuTrigger