
export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-[12px] text-indigo-500 font-semibold  text-right max-w-[380px] ">{children}</div>
    )
}
