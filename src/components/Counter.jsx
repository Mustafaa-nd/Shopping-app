export const Counter = ({cpt,hc,name='Counter Name'}) => {

   
    return (

        
        <div className = "flex justify-between items-center m-2 bg-slate-300 p-2 rounded-lg">
            <h1 className = "text-2xl">Counter : {cpt}</h1>
            <button
            onClick={hc}
            className="bg-blue-500 
            hover:bg-blue-700 
            text-white 
            font-bold 
            text-2xl 
            py-2 px-8 rounded">+</button>
        </div>
    )
}