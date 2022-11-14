import "./App.css";
import Navbar from "./components/Navbar";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className={style.appContainer}>
            <section className={style.sectionContainer}>
                <Navbar />
            </section>
        </div>
    );
}

export default App;

const style = {
    appContainer: `max-w-[720px] mx-auto text-center`,
    sectionContainer: `flex flex-col bg-gray-100 h-[90vh] shadow-xl border relative`,
};
