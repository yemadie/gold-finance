import { ReactNode } from 'react';
interface CardProps {
    children: ReactNode
}

const Card = ({children}: CardProps) => {
    return (
        <div className="text-center border border-[#BD9945] rounded-[18px] 
            p-6 sm:p-6 lg:p-10 bg-gray-800 text-white shadow-[0px_16px_32px_-4px_rgba(145,158,171,0.24)] 
            transition-all duration-300 ease-in-out">
            {children}
            <p>Content goes here</p>
        </div>
    );
};

export default Card;