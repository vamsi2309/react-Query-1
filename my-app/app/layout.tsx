import { ReactNode } from "react";
import ReactQueryProvider from "./Provider";

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function RootLayout({ children}: Props) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}