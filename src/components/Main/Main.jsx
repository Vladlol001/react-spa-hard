// import { useEffect, useContext } from 'react';
// import Preloader from '../common/Preloader';
// import GoodList from './GoodsList/GoodsList';

// function Main() {
//     const { loading, setBucket } = useContext(ShopContext);

//     useEffect(function getGoods() {
//         fetch(API_URL, {
//             headers: {
//                 Authorization: API_KEY,
//             },
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 setBucket(data.shop);
//             })
//             .catch((e) => console.log(e));
//     }, []);

//     return (
//         <main className="main">
//             {loading ? (
//                 <Preloader />
//             ) : (
//                 <div className="container">
//                     <GoodList />
//                 </div>
//             )}
//         </main>
//     );
// }

// export default Main;
