import { ReactNode } from 'react';
interface CardProps {
    children: ReactNode
}

const CardDex = ({children}: CardProps) => {
    return (
        <div className="text-center border border-[#BD9945] rounded-[10px] 
            bg-gray-800 text-white shadow-[0px_16px_32px_-4px_rgba(145,158,171,0.24)] 
            transition-all duration-300 ease-in-out bg-gradient-to-r from-[#222B38] to-[#10161B]">
            {children}
        </div>
    );
};

export default CardDex;