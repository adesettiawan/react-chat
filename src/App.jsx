import "./App.css";
import Navbar from "./components/navbar/Navbar";

import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/chat/Chat";
import { auth } from "./firebase";

function App() {
    const [user] = useAuthState(auth);
    return (
        <div className={style.appContainer}>
            <section className={style.sectionContainer}>
                <Navbar />
                {user ? <Chat /> : null}
            </section>
        </div>
    );
}

export default App;

const style = {
    appContainer: `max-w-[720px] mx-auto text-center`,
    sectionContainer: `flex flex-col bg-gray-100 h-[90vh] shadow-xl border relative`,
};
