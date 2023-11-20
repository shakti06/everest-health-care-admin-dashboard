import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";


export default function DashboardLayout({children} : {children : React.ReactNode}){
    return(
        <div>
            <div>
                <Navbar/>

                <Sidebar/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}