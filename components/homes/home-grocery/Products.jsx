// "use client";
// import Image from "next/image";
// import Link from "next/link";

// export default function BestSellers({ products }) {
//   const formatPrice = (price) => `R$ ${price.toFixed(2)}`;

//   return (
//     <section style={{ padding: "20px", textAlign: "center" }}>
//       <div>
//         <h2 style={{
//           marginTop: "100px",
//           marginBottom: "30px",
//           fontSize: "24px",
//           fontWeight: "500"
//         }}>
//           MAIS VENDIDOS
//         </h2>
//         <div style={styles.gridContainer}>
//           {products.slice(0,12).map((product) => (
//             <div style={styles.card} key={product.id}>
//               <span style={styles.tag}>Novo</span>
//               <Link href={`/product-detail/${product.id}`}>
//                 <Image
//                   src="/images/camiseta.png"
//                   alt={product.title}
//                   width={533}
//                   height={497}
//                   style={styles.image}
//                 />
//               </Link>
//               <div>
//                 <Link
//                   href={`/product-detail/${product.id}`}
//                   style={{ ...styles.link, ...styles.title }}
//                 >
//                   {product.title}
//                 </Link>
//                 <p style={styles.description}>{product.description.slice(0, 100)}</p>
//                 <span style={styles.price}>{formatPrice(product.price)}</span>
//               </div>
//               <button style={styles.comprarBtn}>Comprar</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// const styles = {
//   gridContainer: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//     gap: "20px",
//     justifyItems: "center",
//   },
//   card: {
//     backgroundColor: "#000",
//     color: "#fff",
//     borderRadius: "8px",
//     padding: "15px",
//     width: "250px",
//     textAlign: "center",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     position: "relative",
//   },
//   tag: {
//     position: "absolute",
//     top: "10px",
//     left: "10px",
//     backgroundColor: "#ffea00",
//     color: "#000",
//     padding: "5px 10px",
//     borderRadius: "5px",
//     fontSize: "12px",
//     fontWeight: "bold",
//   },
//   image: {
//     width: "100%",
//     height: "auto",
//     borderRadius: "5px",
//     marginBottom: "10px",
//   },
//   link: {
//     textDecoration: "none",
//     color: "#ffc107",
//   },
//   title: {
//     fontWeight: "bold",
//     display: "block",
//     marginBottom: "5px",
//   },
//   description: {
//     fontSize: "14px",
//     color: "#ccc",
//     marginBottom: "10px",
//   },
//   price: {
//     fontSize: "18px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//     color: "#ffc107",
//     display: "block",
//   },
//   comprarBtn: {
//     backgroundColor: "#ffc107",
//     color: "#000",
//     border: "none",
//     borderRadius: "5px",
//     padding: "10px 15px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     transition: "background-color 0.3s ease",
//   },
//   comprarBtnHover: {
//     backgroundColor: "#ffdb4d",
//   },
// };

"use client";
import Image from "next/image";
import Link from "next/link";

export default function BestSellers({ products }) {
  const formatPrice = (price) => `R$ ${price.toFixed(2)}`;

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <div>
        <h2
          style={{
            marginTop: "100px",
            marginBottom: "30px",
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          MAIS VENDIDOS
        </h2>
        <div className="gridContainer">
          {products.slice(0, 10).map((product) => (
            <div style={styles.card} key={product.id}>
              <Link href={`/product-detail/${product.id}`}>
                <Image
                  src="/images/camiseta.png"
                  alt={product.title}
                  width={533}
                  height={497}
                  style={styles.image}
                />
              </Link>
              <div style={styles.details}>
                <p style={styles.description}>
                  {product.description.slice(0, 100)}
                </p>
                <span style={styles.price}>{formatPrice(product.price)}</span>
                <div style={styles.buttonGroup}>
                  <button style={styles.buyButton}>Comprar</button>
                  <Link
                    href={`/product-detail/${product.id}`}
                    style={styles.viewButton}
                  >
                    Visualizar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gridContainer {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          justify-items: center;
        }

        /* Media query para iPhone XR (largura máxima de 828px) */
        @media (max-width: 828px) {
          .gridContainer {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 15px;
            padding: 10px 5px;
          }

          .gridContainer::-webkit-scrollbar {
            display: none; /* Oculta a barra de rolagem no iOS */
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  card: {
    textAlign: "center",
    width: "250px",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
    flex: "0 0 auto", // Permite o scroll horizontal
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  },
  details: {
    marginTop: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "8px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "12px",
    display: "block",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  buyButton: {
    backgroundColor: "#ffc107",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    flex: 1,
  },
  viewButton: {
    textDecoration: "none",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "5px",
    padding: "10px 15px",
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
};
