export default function Authlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return ( 
        <div className="bg-slate-100 w-full h-[100vh] flex justify-center items-center">
            {children}
        </div>
     );
}
