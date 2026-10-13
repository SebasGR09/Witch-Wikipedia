import { useState } from "react"
import { witches } from "../database/db"
import Buttons from "./Buttons";
import DataMahou from "./DataMahou";
import type { Mahou } from "../types/Mahou";

export default function DataWitch() {

    const [indexDataWitch, indexDataWitchSet] = useState(0);
    const [showModal, showModalSet] = useState(false);

    const data = witches[indexDataWitch];

    const dataMahouShoujo: Mahou = data.belongsTo;

    const colorShadow: string = `0px 3px 20px 2px ${dataMahouShoujo.color}`

    function next() {
        indexDataWitch < witches.length - 1 ? indexDataWitchSet(indexDataWitch + 1) : indexDataWitchSet(0);
    }

    function back() {
        indexDataWitch == 0 ? indexDataWitchSet(witches.length - 1) : indexDataWitchSet(indexDataWitch - 1);
    }

    function showCloseOwner() {
        showModalSet(!showModal);
    }


    return (
        <>
        <div className="flex items-start gap-6">
            <div className="max-w-sm rounded overflow-hidden shadow-lg ml-3 mt-3 rounded-md"  style={{boxShadow: colorShadow}}>
                <img className="w-full h-full object-contain" src={data.image} alt={data.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{data.id} - {data.name}</div>
                  <p className="text-gray-700 text-base">
                    {data.description}
                  </p>
                  
                </div>
                
            
                <div className="px-6 pt-4 pb-2">
                    <Buttons Fnext={next} Fback={back}/>
                    <span 
                        onClick={showCloseOwner}
                        className={showModal ? "bg-white border-1 border-red-400 hover:bg-red-400 text-stone-800 font-bold py-2 px-4 rounded-l ml-2 rounded-r btn" : "border-1 border-green-400 hover:bg-green-400 text-stone-800 font-bold py-2 px-4 rounded-l ml-2 rounded-r btn"}>{showModal ? "Cerrar": "Ver propietaria"}</span>
                </div>
                
            </div>

             {showModal && <DataMahou MahouShoujo={dataMahouShoujo}/>}
        </div>

        </>



      

    )

}