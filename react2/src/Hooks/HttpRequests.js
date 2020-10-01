import {useEffect, useState} from 'react'
import axios from 'axios'
import {API_URL} from '../environment'

function useAxiosGet(url){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])
    return request
}

function useGetAllAsPages(){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })

        axios.get(`${API_URL}seiten`)
            .then(res1 => {
                axios.get(`${API_URL}projekte?fields=*.*`).then(res2 => {
                    let pages = res1.data.data;
                    const projectsAsPage = {
                        id: -1,
                        titel: "Projekte",
                        slug:  `projekte`,
                        subPages: res2.data.data,
                    }
                   pages.splice(1, 0, projectsAsPage)
                    setRequest({
                        loading: false,
                        data: pages,
                        error: false
                    })
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [])
    return request
}

export {useAxiosGet, useGetAllAsPages}