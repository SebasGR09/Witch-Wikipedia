import type { Mahou } from "../types/Mahou";
import PlayerVoice from "./PlayerVoice";

export default function DataMahou({ MahouShoujo }: { MahouShoujo: Mahou}) {


    return <div className={"w-150 shrink-0 flex mt-5"} >
            <div className="h-38 lg:h-auto lg:w-38 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <img src={MahouShoujo.img} alt={MahouShoujo.name} className="w-full h-full object-contain"/>
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{MahouShoujo.id} - {MahouShoujo.name}</div>
                        <p className="text-gray-700 text-base">
                            <b>Descripcion:</b> {MahouShoujo.description} <br />
                            <b>Deseo:</b> <i>{MahouShoujo.wish}</i> <br />
                            <b>Muestra de voz: </b> {MahouShoujo.song != "" ? <PlayerVoice source={MahouShoujo.song}/>: <p>No disponible</p>}
                        </p>
                </div>
            </div>
        </div>
}