export default function Buttons({Fnext, Fback}:  {Fnext: ()=> void, Fback:()=> void}){
    return (
        
        <div className="inline-flex"> 
            <button 
                onClick={Fback}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l btn"
            >
                Atras
            </button>

            <button 
                onClick={Fnext} 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r btn"
            >
                Siguiente
            </button>


        </div>
        

    )
}