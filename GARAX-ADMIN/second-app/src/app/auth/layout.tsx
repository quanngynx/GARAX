export default function Authlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return ( 
        <div className="">
            {children}
        </div>
     );
}
