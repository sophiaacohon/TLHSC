{/*import React, {createContext, useContext, useState} from 'react'
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import { Link, useLocation} from 'react-router-dom'

const SidebarContext = createContext()

const Sidebar = ({children}) => {

    const [expanded,setExpanded] = useState(false);

    return (
        <>
        
      <aside className='h-1 resize-y w-52'>
        <div className={`h-full border-r flex flex-col bg-gray-100 
        border-r shadow-sm ${
                expanded ? 'w-52' : 'w-16'
            }`}>

            <div className={`p-4 pb-2 flex justify-between items-center pl-4 $
                expanded ? 'pl-40' : 'pl-4'
            `}>
            <button 
                onClick={() => setExpanded(curr => ! curr)} 
                className='p-1.5 rounded-lg float-right bg-rose-950 
                text-white hover:bg-zinc-400 hover:text-rose-950'>
                {expanded ? <CgPushChevronLeft /> : <CgPushChevronRight />}
            </button>
            </div>
            
            <SidebarContext.Provider value={{expanded}}>
            <ul className='flex-1 p-3'>{children}</ul>
            </SidebarContext.Provider>
            
        </div>
        
      </aside>
        
      
        </>
    )
}
export function SidebarItem({ icon, text, link, alert }) {
    const { expanded } = useContext(SidebarContext);
    const location = useLocation();
    const isActive = location.pathname === link;

    return (
        <li>
            <Link
                to={link}
                className={`
                    relative flex items-center py-2 px-3 my-1 
                    font-medium rounded-lg cursor-pointer 
                    transition-colors group 
                    ${isActive ? 'bg-zinc-500 text-gray-50' : 'hover:bg-zinc-300'}
                `}
            >
                {icon}
                <span
                    className={` overflow-hidden transition-all ${
                        expanded ? 'w-52 ml-3' : 'w-0'
                    }`}
                >
                    {text}
                </span>

                {alert && (
                    <div
                        className={`absolute right-2 w-2 h-2 rounded bg-zinc-500 
                        ${expanded ? '' : 'top-2'}`}
                    />
                )}

                {!expanded && (
                    <div
                        className={`absolute left-full rounded-md px-2 py-1 ml-6 
                        bg-zinc-200 text-rose-950 text-md opacity-0 
                        -translate-x-3 transition-all group-hover:opacity-100 
                    `}
                    >
                        {text}
                    </div>
                )}
            </Link>
        </li>
    );
}
export default Sidebar
*/}

import React, {createContext, useContext, useState} from 'react'
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import { Link, useLocation} from 'react-router-dom'

const SidebarContext = createContext()

const Sidebar = ({children}) => {

    const [expanded,setExpanded] = useState(false);

    return (
        <>
        
      <aside className='h-1 resize-y w-52'>
        <div className={`h-full border-r flex flex-col bg-gray-100 
        border-r shadow-sm ${
                expanded ? 'w-52' : 'w-16'
            }`}>

            <div className={`p-4 pb-2 flex justify-between items-center pl-4 $
                expanded ? 'pl-40' : 'pl-4'
            `}>
            <button 
                onClick={() => setExpanded(curr => ! curr)} 
                className='p-1.5 rounded-lg float-right bg-rose-950 
                text-white hover:bg-zinc-400 hover:text-rose-950'>
                {expanded ? <CgPushChevronLeft /> : <CgPushChevronRight />}
            </button>
            </div>
            
            <SidebarContext.Provider value={{expanded}}>
            <ul className='flex-1 p-3'>{children}</ul>
            </SidebarContext.Provider>
            
        </div>
        
      </aside>
        
      
        </>
    )
}
export function SidebarItem({ icon, text, link, alert }) {
    const { expanded } = useContext(SidebarContext);
    const location = useLocation();

    return (
        <li>
            <Link
                to={link}
                className={`
                    relative flex items-center py-2 px-3 my-1 
                    font-medium rounded-lg cursor-pointer 
                    transition-colors group 
                `}
            >
                {icon}
                <span
                    className={` overflow-hidden transition-all ${
                        expanded ? 'w-52 ml-3' : 'w-0'
                    }`}
                >
                    {text}
                </span>

                {alert && (
                    <div
                        className={`absolute right-2 w-2 h-2 rounded bg-zinc-500 
                        ${expanded ? '' : 'top-2'}`}
                    />
                )}

                {!expanded && (
                    <div
                        className={`absolute left-full rounded-md px-2 py-1 ml-6 
                        bg-zinc-200 text-rose-950 text-md opacity-0 
                        -translate-x-3 transition-all group-hover:opacity-100 
                    `}
                    >
                        {text}
                    </div>
                )}
            </Link>
        </li>
    );
}
export default Sidebar