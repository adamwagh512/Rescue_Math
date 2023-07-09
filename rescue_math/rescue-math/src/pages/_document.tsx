import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Adding MathJAX */}
        <Script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></Script>
        <Script type="text/javascript" id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         {/* Adding MathJAX */}
//         <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
//         <script type="text/javascript" id="MathJax-script" async
//           src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
//         </script>
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

