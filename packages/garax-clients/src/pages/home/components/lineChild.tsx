function lineChild({width, height} : { width: number, height: number }) {
    return ( 
        <div className="bg-sky-500 w-[71.56px] h-0.5" style={{ width: `${width} px`, height: `${height} px` }}></div>
     );
}

export default lineChild;