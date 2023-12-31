import { Head } from '$fresh/runtime.ts'
import SimulationWrapper from '../islands/SimulationWrapper.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pocket Missile Calculator</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-2xl ml-2">Pocket Missile Calculator</h1>
        <h4 class="pl-4 text-lg font-italic">by <a class="text-blue-600 font-not-italic" href={"https://ferencdv.github.io/"}>Ferenc Dalnoki-Veress</a> and <a class="text-blue-600 font-not-italic" href={"https://kojinglick.com/"}>Kojin Glick</a></h4>
        <h4><a class="pl-4 text-lg font-italic text-blue-600" href={"https://nonproliferation.org/"}>Center for Nonproliferation Studies</a></h4>
        <SimulationWrapper/>
      </div>
    </>
  );
}
