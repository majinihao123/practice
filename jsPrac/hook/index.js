function useRe(value, time) {
    const [state, setDate] = useState("")
    useEffect(() => {
        let timer = setTimeout(() => {
            setDate(value)
        }, time)

        return () => {
            clearTimeout(timer)
        }
    })

    return state
}

function myConmponent() {
    const [value, setValue] = useState("")

    useEffect(()=>{
        const result = useRe(value,1000)
    },[value])

    return <input value={value} onChange={(e) => setValue(e.target.value)}></input>
}