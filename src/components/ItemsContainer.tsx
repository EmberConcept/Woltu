import Item from "./Item";
import { NAVIGATION, PARTNER, RECHTLICHES, SUPPORT } from "./Menus";
const ItemsContainer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
            <Item Links={NAVIGATION} title="NAVIGATION" />
            <Item Links={PARTNER} title="PARTNER" />
            <Item Links={RECHTLICHES} title="RECHTLICHES" />
            <Item Links={SUPPORT} title="SUPPORT" />
        </div>
    );
};

export default ItemsContainer;