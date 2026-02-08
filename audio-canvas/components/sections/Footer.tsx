export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/95 py-6">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 text-sm text-slate-400">
                <p>© {new Date().getFullYear()} Audio Canvas. All rights reserved.</p>
                <a className="hover.text-white" href="#top">Back to top ↑</a>
            </div>
        </footer>
    );
}