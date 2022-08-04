import { keySessionStorage } from '@/utils/global'

const getKey = (email) => `${keySessionStorage}-${email}`

export const getInfo = email => sessionStorage.getItem(getKey(email))
export const setInfo = info => sessionStorage.setItem(`${keySessionStorage}-${info.email}`, JSON.stringify(info))
export const deleteInfo = email => sessionStorage.removeItem(getKey(email))
export const deleteAll = _ => sessionStorage.clear()
export const getAllInfo = _ => {
    let storage = []
    Object.keys(sessionStorage).forEach(key => {
        storage.push(JSON.parse(sessionStorage.getItem(key)))
    })

    return storage
}
