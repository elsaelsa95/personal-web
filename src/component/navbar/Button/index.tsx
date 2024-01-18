"use client";

import style from "./style.module.css";
import { useRouter } from "next/navigation";

type ButtonProps = {
    href: string;
    buttonName: string;
    size?: string
};

export default function Button({ href, buttonName, size }: ButtonProps) {
    const router = useRouter();

    const handle = () => {
        router.push(`${href}`);
    };

    return <button onClick={handle} className={style.button}>{buttonName}</button>;
}
