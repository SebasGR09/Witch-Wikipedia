export default function Buttons({Fnext, Fback}:  {Fnext: ()=> void, Fback:()=> void}){
    return (
        
        <div className="inline-flex"> 
            <button 
                onClick={Fback}
                className="bg-cyan-300 hover:bg-cyan-400 text-stone-800 font-bold py-2 px-4 rounded-l btn"
            >
                Atras
            </button>

            <button 
                onClick={Fnext} 
                className="bg-cyan-300 hover:bg-cyan-400 text-stone-800 font-bold py-2 px-4 rounded-r btn"
            >
                Siguiente
            </button>


        </div>
        

    )
}