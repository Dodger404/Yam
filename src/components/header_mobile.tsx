import { BMenu } from '@/components/b_menu';
import { Basket } from '@/components/basket';
import { Logo } from '@/components/logo';

export default function HeaderMobile() {
    return (
        <header className="flex bg-white justify-between items-center p-4 rounded-b-xl pt-2 pr-10 pb-3 pl-10">
            <div className="w-7 h-7 flex items-center justify-center">
                <BMenu className="w-6 h-6" />
            </div>
                <Logo />
            <div className="w-7 h-7 flex items-center justify-center">
                <Basket className="w-6 h-6" />
            </div>
        </header>
    );
}