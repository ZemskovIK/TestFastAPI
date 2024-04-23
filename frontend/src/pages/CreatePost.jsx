import React, {useState} from 'react';
import Input from "../components/ui/input/Input";
import Button from "../components/ui/button/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { baseURL } from "../config";


const CreatePost = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({
        title: undefined,
        content: undefined
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post(baseURL + 'posts/', JSON.stringify(data), config).then(
            function (response) {
                return navigate('/posts')
            }
        )
        console.log(data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={'form-row'}>
                    <Input type='text' required data={data} setData={setData} value={data.title} name='title'/>
                    <Input type='text' required data={data} setData={setData} value={data.content} name='content'/>
                    <Button type="submit" name='Отправить'/>
                </div>

            </form>
        </div>
    );
};

export default CreatePost;