import Link from "next/link";
import { BlinkingCursor } from "@/components/blinking-cursor";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--bg)] p-6 text-[var(--on-surface)] md:p-12 lg:p-24">
      <div className="mx-auto w-full max-w-[105rem]">
        <div className="mb-10 border border-red-700 bg-[var(--surface-container-lowest)] p-8 shadow-[8px_8px_0_rgba(185,28,28,0.2)] dark:border-red-900 dark:shadow-[8px_8px_0_rgba(153,27,27,0.4)]">
          <p className="mb-4 text-xl font-black tracking-widest text-red-700 dark:text-red-500 md:text-3xl">
            [ !! ] KERNEL PANIC - NOT SYNCING
          </p>
          <p className="text-lg tracking-widest text-red-700 dark:text-red-500 md:text-xl">
            Fatal exception: VFS: Unable to mount root route on unknown-block(4,0,4)
          </p>
        </div>

        <pre className="mb-12 overflow-x-auto whitespace-pre-wrap text-sm leading-8 text-[var(--outline)] md:text-base md:leading-10">
          <code>
            [    0.341235] Oops: 0000 [#1] SMP <br />
            [    0.341288] Modules linked in: dev_core_v1(O) user_interface(O) <br />
            [    0.341355] CPU: 0 PID: 404 Comm: next-router Not tainted 6.8.0-system-op <br />
            [    0.341401] Hardware name: Custom/Build, BIOS 1.0.0 05/10/2026 <br />
            [    0.341450] RIP: 0010:page_not_found+0x4a/0x90 <br />
            [    0.341500] Code: 89 e5 48 83 ec 10 48 89 7d f8 48 8b 45 f8 48 8b 00 48 8b 15 ... <br />
            [    0.341555] RSP: 0018:ffffa12b40013d50 EFLAGS: 00010246 <br />
            [    0.341602] RAX: 0000000000000000 RBX: ffff8b5d41208000 RCX: 0000000000000000 <br />
            [    0.341655] RDX: 0000000000000000 RSI: 0000000000000000 RDI: ffff8b5d41208000 <br />
            [    0.341701] FS:  0000000000000000(0000) GS:ffff8b64bfa00000(0000) knlGS:0000000000000000 <br />
            [    0.341755] CS:  0010 DS: 0000 ES: 0000 CR0: 0000000080050033 <br />
            [    0.341812] CR2: 0000000000000404 CR3: 000000010f3c0001 CR4: 00000000003706f0 <br />
            <br />
            <span className="text-[var(--on-surface)]">---[ end trace 404f9a8b7c6d5e4f ]---</span>
          </code>
        </pre>

        <div className="flex flex-col items-start gap-8 border-l-4 border-[var(--outline-variant)] pl-6 md:pl-10">
          <div>
            <p className="text-2xl font-black tracking-[0.1em] md:text-4xl">
              SEGMENTATION_FAULT
            </p>
            <p className="mt-4 text-xl tracking-widest text-[var(--on-surface-variant)]">
              The requested memory address could not be resolved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-blue-700 dark:text-emerald-400">
              root@system:~#
            </span>
            <Link 
              href="/"
              className="group flex items-center gap-2 border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] px-6 py-3 text-lg font-black tracking-[0.15em] transition hover:border-black hover:bg-black hover:text-white dark:border-[var(--outline-variant)] dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              <span>./REBOOT_SYSTEM.sh</span>
            </Link>
            <BlinkingCursor />
          </div>
        </div>
      </div>
    </main>
  );
}