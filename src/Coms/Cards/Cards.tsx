import { StaticImageData } from "next/image";
import {assets} from "../../assets/assets"
import React from 'react';
import styles from'./Cards.module.css';

type Product = {
    id:number;
    name: string;
    price: number;
    description: string;
    img: StaticImageData
}
function Cards() {
  const items : Product[] = 
  [
    {id:0, name:'لحسة الصحراوية', price:250, description: "اللحسة الصحراوية منتج طبيعي 100% بنتائج ثابتة و أمنة وملحوظة مقارنة مع بعض المنتجات التي تظهر نتائج سريعة مزيفة تزول وتختفي بمجرد التوقف عن الاستخدام. تتكون من عدة مكونات طبيعية وهي: اللوز - دبس التمر- الكركاع - كاوكاو - الصوجا - دروة الجمل - الزنجلان - حبة الحلاوة - لكتيرة - نوتيلا – العسل - حلوة الناطا", img: assets.Product_img},
    {id:0, name:'تحميلات',price:100, description: "this is decription of product", img: assets.Product_img},
    {id:0, name:'صابون طبيعي', price:50, description: "this is decription of product", img: assets.Product_img},
    {id:0, name:'مطول الشعر', price:70, description: "this is decription of product", img: assets.Product_img},
    {id:0, name:'اسم المنتوج', price:100, description: "this is decription of product", img: assets.Product_img},
  ];
  let msg : string;
  return (
<div className={styles.cardContainer} lang="fr">
    {items.map((item, index) => (
     <div className={styles.card} key={index}>
        <a href={`https://wa.me/212607848440?text=Hi imane I want to buy "${item.name}" that costs ${item.price} DH`}>
           <figure className={styles.productImage}>
              <img className={styles.cardImg} src={item.img.src} height="300" width="350" alt={item.name} />
           </figure>
        </a>
        <div className={`${styles.productDetail} w-100`}>
           <a rel="noopener" href={`https://wa.me/212607848440?text=Hi imane I want to buy "${item.name}" that costs ${item.price} DH`}>
               <h2> 
                  <p className={styles.Productname}>
                     {item.name}
                  </p>
               </h2>
           </a>
              <h3> 
                  <p className={styles.Description}>
                     {item.description.substring(0,99) + "..." } 
                     
                  </p> 
               </h3>
           <div>
              <h3 >
               <p className={styles.price}>
               {item.price} DH
               <del >300 dh</del>
               </p> 
              </h3>
           </div>
        </div>
     </div>
    ))}
</div>


  );
}
export default Cards;


                                        