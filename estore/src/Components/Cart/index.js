import { useSelector } from "react-redux";
import FilledCart from "./FilledCart";
import EmptyCart from "./EmptyCart";

const Cart = ()=>{
    const cart = useSelector(state => state.cr)

    return(
        <div>
            {
                cart.cartItems.length===0 ?
                    <EmptyCart/>
                    :
                    <FilledCart/>
            }
        </div>
    )
}
export default Cart;