import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebase";

const SendMessage = ({ scroll }) => {
    const [input, setInput] = useState("");

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (input === "") {
            alert("Please check your message..");
            return;
        }

        const { uid, displayName } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            uid,
            text: input,
            name: displayName,
            timestamp: serverTimestamp(),
        });
        setInput("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <form onSubmit={handleSendMessage} className={style.form}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={style.input}
                placeholder="Message..."
            />
            <button type="submit" className={style.button}>
                Send
            </button>
        </form>
    );
};

export default SendMessage;

const style = {
    form: `w-full h-14 max-w-[728px] flex text-md bottom-2 absolute px-6`,
    input: `w-full text-[16px] bg-slate-200 text-slate-500 p-6 outline-none border-none rounded-tl-[50px] rounded-bl-[50px] shadow-lg`,
    button: `bg-sky-700 text-white w-[20%] pr-2 rounded-tr-[50px] rounded-br-[50px] hover:bg-sky-900`,
};
