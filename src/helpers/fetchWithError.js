export default async function fetchWithError(url, options) {
    const res = await fetch(url, options)

    if (res.status === 200) {
        const ret = await res.json();

        if (ret.error) {
            throw new Error(ret.error)
        }
        return ret
    }
    throw new Error(`Error ${res.status} ${res.statusText}`)
}