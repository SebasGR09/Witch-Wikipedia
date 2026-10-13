export default function Panel({children}: {children: React.ReactNode}){
    return <>
        <div className="panelPrincipal">
            {children}
        </div>
    </>
}