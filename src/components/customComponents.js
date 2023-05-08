import { Listbox } from '@headlessui/react'

function CustomButton(props) {
    return (
        <button className="break-words bg-navyBlue-500 hover:bg-navyBlue-600 dark:bg-navyBlue-600 dark:hover:bg-navyBlue-700 hover:ease-out duration-500 flex items-center justify-center h-10 w-max p-4 text-white rounded-lg gap-x-4" onClick={props.onButtonClick}>
            {props.image}
            {props.text}
          </button>
    )
}

function CustomDatePicker(props) {
    return (
        <div className="relative h-48">
        <h1 className="bold">{props.title}</h1>
        <div className="relative h-96 overflow-auto">
            <Listbox value={"props.getterValue"} onChange={props.setterValue}>
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-slate-100 dark:bg-slate-600 py-2 pl-3 pr-10 text-left focus:outline-none "><h1>{props.array[props.getterValue]}</h1></Listbox.Button>
            <Listbox.Options className="rounded-lg">
                {props.array.map((item, index) => (
                <Listbox.Option
                    key={index}
                    value={index} className="p-4 h-12 pl-2 flex items-center bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 hover:dark:bg-slate-700"
                >
                    {item}
                </Listbox.Option>
                ))}
            </Listbox.Options>
            </Listbox>
        </div>
        </div>
    )
}

export {CustomButton, CustomDatePicker};