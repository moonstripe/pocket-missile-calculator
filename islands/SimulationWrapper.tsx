import { useState } from "preact/hooks"
import Simulation from "./Simulation.tsx"

export default function SimulationWrapper() {
    const [accessCode, setAccessCode] = useState<string | undefined>()
    const [modalVisibility, setModalVisibility] = useState<string>("")

    const handleAccessCodeChange = (e: Event) => {
        const target = e.currentTarget as HTMLInputElement

        setAccessCode(target.value)
    }

    const handleSubmit = () => {
        if (accessCode) {
            setModalVisibility("invisible -z-50")
        }
    }

    return (
        <div class="flex flex-col overflow-hidden">
            <div class={`absolute top-0 left-0 bg-white w-screen h-screen flex flex-col ${modalVisibility} pt-32 overflow-none`}>
                <h1 class="text-xl mx-auto opacity-100">Please input your access code to use the Pocket Missile Calculator</h1>
                <p class="text-sm my-2 mx-auto">For an access code, please email <a target="_blank" rel="noreferrer noopener" href={"mailto:kglick@middlebury.edu,jdalnokiveress@middlebury.edu"} class="text-blue-600">the administrators</a>.</p>
                <input type="text" class="mx-auto border my-2 rounded-lg w-1/2 px-4" placeholder="access code" onInput={handleAccessCodeChange}/>
                <button class="px-4 py-2 border rounded-lg mx-auto hover:text-white hover:bg-black focus:outline-none" onClick={handleSubmit}>Submit</button>
            </div>
            <Simulation accessCode={accessCode}/>
        </div>
    )
}