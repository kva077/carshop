// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { busketAdded, busketDecremented } from "../../../store/busket";
// import InputQuantity from "../inputQuantity";

// const BusketButton = ({ _id, image, name, manufacturer, price }) => {
//     const part = { _id, image, name, manufacturer, price };
//     const dispatch = useDispatch();
//     const busketItem = useSelector((state) =>
//         state.busket.items.find((item) => item._id === _id)
//     );
//     console.log(busketItem);
//     const addedCount = busketItem ? busketItem.count : 0;
//     const handleAddProductToCart = (part) => {
//         dispatch(busketAdded(part));
//     };

//     const handleRemoveProductFromCart = () => {
//         const id = { _id };
//         dispatch(busketDecremented(id));
//     };
//     return (
//         <>
//             {addedCount > 0 ? (
//                 <InputQuantity
//                     value={addedCount}
//                     handleAdd={() => handleAddProductToCart(part)}
//                     handleRemove={() => handleRemoveProductFromCart(part._id)}
//                 />
//             ) : (
//                 <div className="parts-grid__body-button">
//                     <button
//                         className="blue-button"
//                         onClick={handleAddProductToCart(part)}
//                     >
//                         В корзину
//                     </button>
//                 </div>
//             )}
//         </>
//     );
// };

// export default BusketButton;
