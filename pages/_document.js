import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
      const isDark = window.localStorage.getItem('airbnbTheme') ? (window.localStorage.getItem('airbnbTheme') === 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        document.body.classList.add('dark');
      }
    `;
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
