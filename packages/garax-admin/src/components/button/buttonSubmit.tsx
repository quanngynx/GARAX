
interface IButtonSubmit {
    nameBtn: string
    handleFunc: () => void
}
export function ButtonSubmit({ nameBtn, handleFunc } : IButtonSubmit) {
    return (
        <button 
        onClick={handleFunc}
        className="rounded-full py-2 bg-[#1E1E1E] hover:shadow-black w-full text-white text-xl font-bold font-['Roboto'] leading-normal"
        >
            {nameBtn}
        </button>
    );
}

