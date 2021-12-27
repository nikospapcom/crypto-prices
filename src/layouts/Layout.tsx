const Layout = ({ children }: { children:any }) => {
    return (
      <div className="bg-gray-900 text-white min-h-screen">
        <main className="container mx-auto">{children}</main>
    </div>
    );
};
export default Layout;