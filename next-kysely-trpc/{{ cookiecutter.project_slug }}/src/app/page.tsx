'use client'
import trpc from '@/lib/trpc/client'

export default function Home() {
  const testQuery = trpc.testQuery.useQuery()
  const testMutation = trpc.testMutation.useMutation()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
          <li>
            Update your API in real time:
            <br />
            {testQuery.isLoading && <>Loading...</>}
            {testQuery.isError && <>Error!</>}
            {testQuery.data}
            <br />
            <button onClick={evt => {testQuery.refetch()}}>Click me</button>
          </li>
          <li>
            <button onClick={evt => {testMutation.mutate({ value: testQuery.data || 0 })}}>Click Me</button>
            <br />
            {testMutation.isPending && <>Loading...</>}
            {testMutation.data}
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
