import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const setInitialTheme = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "7v7x1x83wa");
    `;
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        </body>
      </Html>
    )
  }
}

export default MyDocument