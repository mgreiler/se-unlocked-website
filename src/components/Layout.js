import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import * as styles from "../styles/home.module.css";


export default function Layout({ children }) {
  return (
    <main>
      <section className={styles.header}>
          <title>SE Unlocked</title>
          <div className="layout">
            <Navbar />

          </div>
      </section>
      <section className={styles.body}>
                  <div className="content">{children}</div>
      </section>
      <section>
            <footer>
              <p>Copyright 2021 Michaela Greiler</p>
            </footer>
      </section>
    </main>
  );
}




// export default function Layout({ children }) {
//   return (
//     <section className={styles.header}>
//       <main>
//         <title>SE Unlocked</title>
//         <div className="layout">
//           <Navbar />
//           <div className="content">{children}</div>
//           <footer>
//             <p>Copyright 2021 Michaela Greiler</p>
//           </footer>
//         </div>
//       </main>
//     </section>
//   );
// }
